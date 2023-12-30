import { IsEmpty, IsNotEmpty, IsNumber, IsObject, IsString } from "class-validator";
import { List } from "../entities/Lists.entity";

export class CreateParagrafoDTO {

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  subtitle: string;

  @IsEmpty()
  @IsString()
  paragrafo_image?: string;

  @IsObject({each : true})
  @IsEmpty()
  lists?: List

  @IsNotEmpty()
  @IsNumber()
  post: number; // post_id should get id by post
}