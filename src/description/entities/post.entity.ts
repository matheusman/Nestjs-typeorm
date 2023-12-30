import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Description } from "./description.entity";
import { Paragrafo } from "src/paragrafos/entities/paragrafos.entity";
import { CreateParagrafoDTO } from "src/paragrafos/dto/CreateParagrafoDto";
import { CreateDescriptionDTO } from "../dto/CreateDescriptionDto";

@Entity('posts')
export class Post {

  @PrimaryGeneratedColumn()
  post_id: number;

  @OneToOne( () => Description, description => description.post)
  @JoinColumn({ name : 'description_id', referencedColumnName: 'description_id'})
  description?: Description | CreateDescriptionDTO;

  @OneToMany( () => Paragrafo, paragrafo => paragrafo.post)
  @JoinColumn({ name: 'paragrafos_id', referencedColumnName: 'paragrafo_id'})
  paragrafos?: CreateParagrafoDTO | Paragrafo[]
}