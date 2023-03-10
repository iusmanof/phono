import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';

@Injectable()
export class PhonesService {
  prismaTake: number = 6;


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
    const pages = Math.ceil(totalData.length / this.prismaTake);
    const meta = { total: totalData.length, prismaTake: this.prismaTake, pages };

    const phonesWithPagination = await this.prisma.phone.findMany({
      take: this.prismaTake,
    });

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

  async universalRequest(obj){
    let whereData = {};
    let orderByData = []

    if( obj.color){
      whereData = { color: obj.color , ...whereData}
    }

    if( obj.price_from || obj.price_to){
      whereData = { price: { gte: obj.price_from || 0, lte: obj.price_to || 999999 }, ...whereData}
    }

    if( obj.sorting){
      orderByData.push({ price: obj.sorting })
    }
    
    const offset = (obj.page - 1) * obj.take;

    const phonesWithWhere = await this.prisma.phone.findMany({ 
      skip: offset || 0, 
      take: obj.take,
      where: whereData,
      orderBy: orderByData
    });


    const totalData = await this.prisma.phone.findMany({ 
      where: whereData,
      orderBy: orderByData
    });
    const pages = Math.ceil(totalData.length / obj.take);
    const meta = { total: totalData.length, take: obj.take, pages };

console.log({ data: phonesWithWhere, meta })
    return { data: phonesWithWhere, meta };
  }
}



// npm run start:dev
// docker-compose up -d dev-db