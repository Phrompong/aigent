import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Hotel } from './hotel.type';

@Injectable()
export class HotelRepository {
  constructor(private prisma: PrismaService) {}

  async getHotel(name: string, limit: number, page: number): Promise<Hotel[]> {
    return this.prisma.hotel.findMany({
      skip: (page - 1) * limit,
      take: limit,
      select: {
        hid: true,
        name: true,
        address: true,
        latitude: true,
        longitude: true,
        review_hotel: {
          select: {
            hid: true,
            rating: true,
          },
        },
      },
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
      orderBy: {
        name: 'asc',
      },
    });
  }
}
