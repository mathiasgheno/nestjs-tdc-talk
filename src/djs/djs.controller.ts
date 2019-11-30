import { Controller, Get, Param } from "@nestjs/common";
import { ApiResponse, ApiUseTags } from "@nestjs/swagger";
import { DjsService } from "./djs.service";
import { SongsService } from "../songs/songs.service";
import { DjsDTO, DjsWithSongs } from "../data/djs";

@ApiUseTags('djs')
@Controller('djs')
export class DjsController {

  constructor(
    private readonly djsService: DjsService,
    private readonly songsService: SongsService,
  ) {}

  @Get(':id')
  @ApiResponse({
    type: DjsDTO,
    status: 201,
  })
  findDjById(@Param('id') id: string) {
    return this.djsService.getDj(id);
  }

  @Get(':id/songs')
  @ApiResponse({
    type: DjsWithSongs,
    status: 201,
  })
  async findDjByName(@Param('id') id: string): Promise<DjsWithSongs> {
    const dj = await this.djsService.getDj(id);
    const name = dj.name.toLowerCase();
    const songs = await this.songsService.getSongsByArtist(name);
    return {
      ...dj,
      songs,
    }
  }
}