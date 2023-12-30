import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDescriptionDTO {
  @IsString()
  @IsNotEmpty()
  key_word: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  post_id: number;
}