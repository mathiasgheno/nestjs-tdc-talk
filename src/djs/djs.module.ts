import { Module } from '@nestjs/common';
import { DjsController } from "./djs.controller";
import { DjsService } from "./djs.service";
import { SongsService } from "../songs/songs.service";

@Module({
  controllers: [DjsController],
  providers: [DjsService, SongsService],
})
export class DjsModule {}
