import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Paragrafo } from "./paragrafos.entity";
import { Text_list } from "./text_list";

@Entity('lists')
export class List {

  @PrimaryGeneratedColumn()
  list_id: number;

  @Column()
  title_list: string;

  @OneToMany(() => Text_list, text_list => text_list.list)
  @JoinColumn({ name: 'text_list'})
  text_lists: Text_list[]

  @OneToOne( () => Paragrafo, paragrafos => paragrafos.lists)
  paragrafo: Paragrafo
}