import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiImplicitBody, ApiImplicitParam, ApiImplicitQuery, ApiResponse, ApiUseTags } from "@nestjs/swagger";
import { SongsService } from "./songs.service";
import { genres as genresEnum, SongDTO } from "../data/songs";

@ApiUseTags('songs')
@Controller('songs')
export class SongsController {

  constructor(
    private readonly songsService: SongsService,
  ) {}

  @Get(':id')
  @ApiImplicitParam({
    required: true,
    description: 'ID ',
    name: 'id',
  })
  @ApiResponse({
    status: 201,
    type: SongDTO,
  })
  findSongById(@Param('id') id) {
    return this.songsService.getSong(id);
  }

  @Delete(':id')
  @ApiImplicitParam({
    required: true,
    description: 'ID ',
    name: 'id',
  })
  @ApiResponse({
    status: 201,
    type: [SongDTO],
  })
  deleteSong(@Param('id') id) {
    return this.songsService.deleteSong(id);
  }

  @Put()
  @ApiResponse({
    status: 201,
    type: [SongDTO],
  })
  updateSong(@Body() song: SongDTO) {
    return this.songsService.putSong(song)
  }

  @Get()
  @ApiImplicitQuery({
    isArray: true,
    name: 'genre',
    enum: genresEnum,
  })
  @ApiResponse({
    status: 201,
    type: [SongDTO],
  })
  findByGenres(@Query('genre') genres) {
    if (typeof genres === 'string') genres = [ genres ];
    const formatedGenres = genres.map(g => g.toLowerCase());
    return this.songsService.getSongsByGenre(formatedGenres);
  }

  @Post()
  @ApiResponse({
    status: 201,
    type: [SongDTO],
  })
  @ApiImplicitBody({
    type: SongDTO,
    name: 'song',
    required: true,
    description: 'Song you want to persist',
  })
  persistSong(@Body() song) {
    return this.songsService.postSong(song);
  }
}