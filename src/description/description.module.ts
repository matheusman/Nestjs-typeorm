import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DescriptionService } from './description.service';
import { DescriptionController } from './description.controller';
import { Description } from './entities/description.entity';
import { Post } from './entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Description, Post])],
  providers: [DescriptionService],
  controllers: [DescriptionController]
})
export class DescriptionModule {}
