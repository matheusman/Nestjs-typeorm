import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Description } from 'src/description/entities/description.entity';
import { Post } from 'src/description/entities/post.entity';
import { List } from 'src/paragrafos/entities/Lists.entity';
import { Paragrafo } from 'src/paragrafos/entities/paragrafos.entity';
import { Text_list } from 'src/paragrafos/entities/text_list';
import { DataSourceOptions } from 'typeorm';

export const datasourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  database: 'blog',
  username: 'matheus',
  password: 'root',
  port: 3306,
  entities: [Description, Post, Paragrafo, List, Text_list],
  synchronize: true,
};

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return {
          ...datasourceOptions,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
