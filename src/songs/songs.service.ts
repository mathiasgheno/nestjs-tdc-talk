import { Injectable } from "@nestjs/common";
import songs, { ISong } from "../data/songs";

@Injectable()
export class SongsService {

  async getSong(id): Promise<ISong> {
    const mySongs = await songs().get();
    return mySongs.find((song) => song.id == id);
  }

  async deleteSong(id): Promise<ISong[]> {
    await songs().delete(id);
    return songs().get();
  }

  async getSongsByGenre(genres: string[]): Promise<ISong[]> {
    const mySongs = await songs().get();
    return mySongs
      .map(song => {
        song.genre = song.genre.map(g => g.toLowerCase());
        return song;
      })
      .filter(song => genres.every(genre => song.genre.includes(genre)));
  }

  async getSongsByArtist(artist: string): Promise<ISong[]> {
    const mySongs = await songs().get();
    return mySongs.filter(song => song.artists.some(a => a.toLowerCase() === artist));
  }

  async postSong(song): Promise<ISong[]> {
    await songs().post(song);
    return songs().get();
  }

  async putSong(song): Promise<ISong[]> {
    await songs().put(song);
    return songs().get();
  }

}