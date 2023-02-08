import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import pagination from 'prisma-extension-pagination';
import { PrismaClient } from '@prisma/client';

const phonesTest = [
  {
    id: 1000,
    inches: 6.2,
    price: '$701.00',
    color: 'red',
    type: 'Android Phone',
    raiting: 4.3,
    urlImage:
      'https://res.cloudinary.com/dxedgvxdu/image/upload/v1672321789/phono/mobile_dhbboj.png',
  },
  {
    id: 1001,
    inches: 6.22,
    price: '$101.00',
    color: 'blue',
    type: 'iPhone',
    raiting: 4.8,
    urlImage:
      'https://res.cloudinary.com/dxedgvxdu/image/upload/v1672321789/phono/mobile_dhbboj.png',
  },
  {
    id: 1002,
    inches: 3.2,
    price: '$51.00',
    color: 'black',
    type: 'Smartphone',
    raiting: 3.3,
    urlImage:
      'https://res.cloudinary.com/dxedgvxdu/image/upload/v1672321789/phono/mobile_dhbboj.png',
  },
];

@Injectable()
export class PhonesService {
  constructor(private prisma: PrismaService) {}

  async create(createPhoneDto: CreatePhoneDto) {
    const newPhone = await this.prisma.phone.create({
      data: {
        ...createPhoneDto,
      },
    });
    return newPhone;
  }

  async findAll() {
    const totalData = await this.prisma.phone.findMany();
    const prismaTake = 6;
    const pages = Math.ceil(totalData.length / prismaTake);

    const phonesWithPagination = await this.prisma.phone.findMany({
      take: prismaTake,
    });

    const meta = { total: totalData.length, prismaTake, pages };
    return { data: phonesWithPagination, meta };
  }

  async findOne(id: number) {
    return await this.prisma.phone.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updatePhoneDto: UpdatePhoneDto) {
    return await this.prisma.phone.update({
      where: {
        id: id,
      },
      data: {
        ...updatePhoneDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.phone.delete({
      where: {
        id: id,
      },
    });
  }

  async filterByColorRatingPagination(color: string, sort, page) {
    const showItemsOnPage = 6;
    const offset = (page - 1) * showItemsOnPage;
    return await this.prisma.phone.findMany({
      skip: offset || 0,
      take: showItemsOnPage,
      where: {
        color: {
          startsWith: color,
        },
      },
      orderBy: {
        raiting: sort,
      },
    });
  }

  async filterByPriceWithPagination(
    price_from: number,
    price_to: number,
    page,
  ) {
    const showItemsOnPage = 6;
    const offset = (page - 1) * showItemsOnPage;

    let objWhere;
    if (isNaN(price_from)) {
      objWhere = {
        price: {
          lte: price_to,
        },
      };
    }

    if (isNaN(price_to)) {
      objWhere = {
        price: {
          gte: price_from,
        },
      };
    }

    return await this.prisma.phone.findMany({
      skip: offset || 0,
      take: showItemsOnPage,
      where: objWhere || {
        price: {
          gte: price_from,
          lte: price_to,
        },
      },
    });
  }
}
