import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ParagrafosModule } from './paragrafos/paragrafos.module';
import { DescriptionModule } from './description/description.module';
import 'dotenv/config';

@Module({
  imports: [DatabaseModule, ParagrafosModule, DescriptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
