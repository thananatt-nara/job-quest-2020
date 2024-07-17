import { DatabaseModule } from '@/database/database.module';
import { JokeModule } from '@/joke/joke.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

const Config = ConfigModule.forRoot({ isGlobal: true });

@Module({
  imports: [Config, DatabaseModule, JokeModule, AuthModule],
})
export class AppModule {}
