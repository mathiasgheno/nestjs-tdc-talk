import { Controller, Get, Param } from "@nestjs/common";
import { DjsService } from "./djs.service";
import { SongsService } from "../songs/songs.service";
import { ApiUseTags } from "@nestjs/swagger";

@ApiUseTags('djs')
@Controller('djs')
export class DjsController {

  constructor(
    private readonly djsService: DjsService,
    private readonly songsService: SongsService,
  ) {}

  @Get(':id')
  findDjById(@Param('id') id: string) {
    return this.djsService.getDjById(id);
  }

  @Get(':id/songs')
  async findDjByName(@Param('id') id: string) {
    const name =  await this.djsService.getNameDjByName(id);
    return this.songsService.getSongsByArtist(name.toLowerCase());
  }
}