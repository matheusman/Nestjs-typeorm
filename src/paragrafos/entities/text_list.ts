import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { List } from "./Lists.entity";

@Entity('text_lists')
export class Text_list {

  @PrimaryGeneratedColumn()
  text_list_id: number;

  @Column()
  text: string;

  @ManyToOne(() => List, list => list.text_lists)
  list: List
}