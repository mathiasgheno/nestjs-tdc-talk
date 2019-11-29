import { Module } from '@nestjs/common';
import { SongsModule } from './songs/songs.module';
import { DjsModule } from './djs/djs.module';

@Module({
  imports: [SongsModule, DjsModule],
})
export class AppModule {}
