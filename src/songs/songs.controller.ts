import { Controller, Get, Param, Query } from "@nestjs/common";
import { SongsService } from "./songs.service";
import { ApiImplicitQuery, ApiUseTags } from "@nestjs/swagger";
import { genres as genresEnum } from '../data/songs';

@ApiUseTags('songs')
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
  @ApiImplicitQuery({
    isArray: true,
    name: 'genre',
    enum: genresEnum,
  })
  findByGenres(@Query('genre') genres) {
    if (typeof genres === 'string') {
      genres = [genres];
    }
    const formatedGenres = genres.map(g => g.toLowerCase());
    return this.songsService.getSongsByGenre(formatedGenres);
  }
}