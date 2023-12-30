import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Description } from "../entities/description.entity";
import { CreateDescriptionDTO } from "../dto/CreateDescriptionDto";


@Injectable()
export class DescriptionRepository {
  constructor (@InjectRepository(Description) private readonly descriptionRepository: Repository<Description>) {}

  async createDescription (descriptionBody : CreateDescriptionDTO) {
    const description = this.descriptionRepository.create(descriptionBody)
    return await this.descriptionRepository.save(description)
  }


}