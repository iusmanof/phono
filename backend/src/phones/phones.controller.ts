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
    if (
      request.query.sorting || 
      request.query.price_from ||
      request.query.price_to ||
      request.query.color || 
      request.query.raiting || 
      request.query.page || 
      request.query.take
      )
    { 
      const price_from = Number(request.query.price_from);
      const price_to = Number(request.query.price_to);
      const color = request.query.color as string;

      const sorting = request.query.sorting
      
      const page = request.query.page;
      const take = Number(request.query.take);

      const paramObj = {price_from, price_to, color, sorting, page: page || 1, take: take || 6}

      return this.phonesService.universalRequest(paramObj)
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
