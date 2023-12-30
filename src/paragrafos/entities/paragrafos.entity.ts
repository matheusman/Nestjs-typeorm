import { Post } from "src/description/entities/post.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { List } from "./Lists.entity";

@Entity('paragrafos')
export class Paragrafo {
  @PrimaryGeneratedColumn()
  paragrafo_id: number;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column()
  paragrafo_image: string;

  @OneToOne( () => List, list => list.paragrafo)
  @JoinColumn({name: 'list_id', referencedColumnName: 'list_id'})
  lists: List

  @ManyToOne( () => Post, post => post.paragrafos)
  @JoinColumn({name: 'post_id', referencedColumnName: 'post_id'})
  post: Post
}