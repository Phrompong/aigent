import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { HotelRepository } from 'src/reposiroties/hotel.repository';

@Injectable()
export class B2bService {
  constructor(
    private httpService: HttpService,
    private hotelRepo: HotelRepository,
  ) {}

  async getHotels(name: string, limit: number, page: number) {
    const hotels = await this.hotelRepo.getHotel(name, limit, page);

    return hotels.map((hotel) => {
      return {
        hid: hotel.hid,
        name: hotel.name,
        address: hotel.address,
        latitude: hotel.latitude,
        longitude: hotel.longitude,
        rating: hotel?.review_hotel?.rating || null,
      };
    });
  }

  private async post(endpoint: string, requestData: any): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService
        .post(`${process.env.BASE_URL}/${endpoint}`, requestData, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${Buffer.from(`${process.env.KEY_ID}:${process.env.API_KEY}`).toString('base64')}`,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            console.log('An error happened!', error);
            throw error.response;
          }),
        ),
    );

    return data;
  }
}
