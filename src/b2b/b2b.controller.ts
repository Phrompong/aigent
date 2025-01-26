import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { B2bService } from './b2b.service';
import { Response } from 'express';

@Controller('b2b')
export class B2bController {
  constructor(private readonly b2bService: B2bService) {}

  @Get('search/hotel')
  async searchHotels(@Query() query, @Res() res: Response) {
    const data = await this.b2bService.getHotels(
      query.name,
      !query.limit ? 5 : +query.limit,
      !query.page ? 1 : +query.page,
    );

    res.status(HttpStatus.OK).json({
      message: 'ok',
      data,
    });
  }
}
