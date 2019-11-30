import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiImplicitBody, ApiImplicitParam, ApiImplicitQuery, ApiUseTags } from "@nestjs/swagger";
import { SongsService } from "./songs.service";
import { genres as genresEnum } from '../data/songs';

@ApiUseTags('songs')
@Controller('songs')
export class SongsController {

  constructor(
    private readonly songsService: SongsService,
  ) {}

  @Get(':id')
  findSongById(@Param('id') id) {
    return this.songsService.getSong(id);
  }

  @Delete()
  @ApiImplicitParam({
    required: true,
    description: 'ID ',
    name: 'id',
  })
  deleteSong(@Param('id') id) {
    return this.songsService.deleteSong(id);
  }

  @Get()
  @ApiImplicitQuery({
    isArray: true,
    name: 'genre',
    enum: genresEnum,
  })
  findByGenres(@Query('genre') genres) {
    if (typeof genres === 'string') genres = [ genres ];
    const formatedGenres = genres.map(g => g.toLowerCase());
    return this.songsService.getSongsByGenre(formatedGenres);
  }

  @Post()
  @ApiImplicitBody({
    type: Object,
    name: 'song',
    required: true,
    description: 'Song you want to persist',
  })
  persistSong(@Body() song) {
    return this.songsService.postSong(song);
  }

  @Put()
  @ApiImplicitBody({
    type: Object,
    name: 'song',
    required: true,
    description: 'Song you want to update',
  })
  updateSong(@Body() song) {
    return this.songsService.putSong(song)
  }
}