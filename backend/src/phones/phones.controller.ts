import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { PhonesService } from './phones.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { Request } from 'express';

@Controller('phones')
export class PhonesController {
  constructor(private readonly phonesService: PhonesService) {}

  @Post()
  create(@Body() createPhoneDto: CreatePhoneDto) {
    return this.phonesService.create(createPhoneDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    if (request.query.color || request.query.raiting || request.query.page) {
      const color = request.query.color as string;
      const sort = request.query.raiting;
      const page = request.query.page;
      return this.phonesService.filterByColorRatingPagination(
        color,
        sort,
        page,
      );
    }

    if (
      request.query.price_from ||
      request.query.price_to ||
      request.query.page
    ) {
      const price_from = Number(request.query.price_from);
      const price_to = Number(request.query.price_to);
      const page = request.query.page;
      return this.phonesService.filterByPriceWithPagination(
        price_from,
        price_to,
        page,
      );
    }

    return this.phonesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phonesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhoneDto: UpdatePhoneDto) {
    return this.phonesService.update(+id, updatePhoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phonesService.remove(+id);
  }
}
