import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";

@Entity('descriptions')
export class Description {
  @PrimaryGeneratedColumn()
  description_id: number;

  @Column()
  key_word: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToOne( () => Post, post => post.description)
  post: Post;

}