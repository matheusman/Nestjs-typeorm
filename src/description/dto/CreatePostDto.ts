import { IsEmpty, IsObject } from "class-validator";
import { Paragrafo } from "src/paragrafos/entities/paragrafos.entity";


export class CreatePostDTO {

  @IsEmpty()
  @IsObject()
  description?: CreatePostDTO;

  @IsEmpty()
  @IsObject({ each : true })
  paragrafos?: Paragrafo[]
}