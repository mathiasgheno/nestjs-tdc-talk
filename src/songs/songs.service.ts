import { Injectable } from "@nestjs/common";
import songs, { ISong } from "../data/songs";

@Injectable()
export class SongsService {

  async getSongById(id): Promise<ISong> {
    const mySongs = await songs();
    return mySongs.find((song) => song.id == id);
  }

  async getSongsByGenre(genres: string[]): Promise<ISong[]> {
    const mySongs = await songs();
    return mySongs
      .map(song => {
        song.genre = song.genre.map(g => g.toLowerCase());
        return song;
      })
      .filter(song => genres.every(genre => song.genre.includes(genre)));
  }

  async getSongsByArtist(artist: string): Promise<ISong[]> {
    const mySongs = await songs();
    return mySongs.filter(song => song.artists.some(a => a.toLowerCase() === artist));
  }

}