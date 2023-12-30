import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParagrafosService } from './paragrafos.service';
import { ParagrafosController } from './paragrafos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [ParagrafosService],
  controllers: [ParagrafosController]

})
export class ParagrafosModule {}
