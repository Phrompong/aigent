import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { B2bController } from './b2b/b2b.controller';
import { B2bService } from './b2b/b2b.service';
import { B2bModule } from './b2b/b2b.module';
import { HttpModule } from '@nestjs/axios';
import { HotelRepository } from './reposiroties/hotel.repository';

@Module({
  imports: [ConfigModule.forRoot(), B2bModule],
  controllers: [B2bController],
})
export class AppModule {}
