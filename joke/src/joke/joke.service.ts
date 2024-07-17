import { DatabaseService } from '@/database/database.service';
import { Injectable } from '@nestjs/common';

import { CreateJokeDto } from './dto/create-joke.dto';

@Injectable()
export class JokeService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createJokeDto: CreateJokeDto) {
    await this.databaseService.joke.create({ data: createJokeDto });

    return {
      message: 'Joke created successfully',
      status: 'success',
    };
  }

  async findAll() {
    const jokes = await this.databaseService.joke.findMany();

    return {
      message: 'Jokes retrieved successfully',
      data: {
        count: jokes.length,
        jokes,
      },
      status: 'success',
    };
  }

  async findOne(id: number) {
    const record = await this.databaseService.joke.findUniqueOrThrow({
      where: { id },
    });

    return {
      message: 'Joke retrieved successfully',
      data: record,
      status: 'success',
    };
  }

  async remove(id: number) {
    await this.databaseService.joke.delete({ where: { id } });

    return {
      message: 'Joke deleted successfully',
      status: 'success',
    };
  }

  async like(id: number) {
    const joke = await this.databaseService.joke.update({
      where: { id },
      data: { likes: { increment: 1 } },
    });

    return {
      message: 'Joke liked successfully',
      data: {
        joke,
      },
      status: 'success',
    };
  }

  async dislike(id: number) {
    const joke = await this.databaseService.joke.update({
      where: { id },
      data: { dislikes: { increment: 1 } },
    });

    return {
      message: 'Joke dislike successfully',
      data: {
        joke,
      },
      status: 'success',
    };
  }
}
