import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { JokeService } from './joke.service';
import { CreateJokeDto } from './dto/create-joke.dto';
import { JwtAuthGuard } from '@/guard/jwt-auth.guard';

@Controller('joke')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createJokeDto: CreateJokeDto) {
    return this.jokeService.create(createJokeDto);
  }

  @Get()
  findAll() {
    return this.jokeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.jokeService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.jokeService.remove(id);
  }

  @Patch(':id/like')
  like(@Param('id', ParseIntPipe) id: number) {
    return this.jokeService.like(id);
  }

  @Patch(':id/dislike')
  dislike(@Param('id', ParseIntPipe) id: number) {
    return this.jokeService.dislike(id);
  }
}
