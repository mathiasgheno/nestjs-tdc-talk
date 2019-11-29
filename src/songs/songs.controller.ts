import { Controller, Get, Param, Query } from "@nestjs/common";
import { SongsService } from "./songs.service";
import { observable, Observable } from "rxjs";

@Controller('songs')
export class SongsController {

  constructor(
    private readonly songsService: SongsService
  ) {}

  @Get(':id')
  findSongById(@Param('id') id: string) {
    return this.songsService.getSongById(id);
  }

  @Get()
  findByGenres(@Query('genre') genres: string[] | string) {
    if (typeof genres === 'string') {
      genres = [genres];
    }
    const formatedGenres = genres.map(g => g.toLowerCase());
    return this.songsService.getSongsByGenre(formatedGenres);
  }
}