import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "../entities/post.entity";
import { Repository } from "typeorm";


@Injectable()
export class PostRepository {
  constructor (@InjectRepository(Post) private readonly postRepository: Repository<Post>) {}

  async createPost () {
    const postId = this.postRepository.create()
    return await this.postRepository.save(postId)
  }


}