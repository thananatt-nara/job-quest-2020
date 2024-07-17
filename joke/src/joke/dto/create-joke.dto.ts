import { IsString, MinLength } from 'class-validator';

export class CreateJokeDto {
  @IsString()
  @MinLength(10, { message: 'Joke is too short' })
  content: string;
}
