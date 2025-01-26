import { Module } from '@nestjs/common';
import { B2bService } from './b2b.service';
import { HttpModule } from '@nestjs/axios';
import { HotelRepository } from 'src/reposiroties/hotel.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [HttpModule],
  providers: [B2bService, HotelRepository, PrismaService],
  exports: [B2bService],
})
export class B2bModule {}
