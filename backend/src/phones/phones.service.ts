import { Injectable } from '@nestjs/common';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';

let phonesTest = [
  {
      id: 1000,
      inches: 6.20,
      price: "$701.00",
      color: "red",
      type: "Android Phone",
      raiting: 4.3,
      urlImage: "https://res.cloudinary.com/dxedgvxdu/image/upload/v1672321789/phono/mobile_dhbboj.png"
  },
  {
      id: 1001,
      inches: 6.22,
      price: "$101.00",
      color: "blue",
      type: "iPhone",
      raiting: 4.8,
      urlImage: "https://res.cloudinary.com/dxedgvxdu/image/upload/v1672321789/phono/mobile_dhbboj.png"
  },
  {
      id: 1002,
      inches: 3.20,
      price: "$51.00",
      color: "black",
      type: "Smartphone",
      raiting: 3.3,
      urlImage: "https://res.cloudinary.com/dxedgvxdu/image/upload/v1672321789/phono/mobile_dhbboj.png"
  }
]

@Injectable()
export class PhonesService {
  create(createPhoneDto: CreatePhoneDto) {
    return 'This action adds a new phone';
  }

  findAll() {
    return phonesTest;
  }

  findOne(id: number) {
    return `This action returns a #${id} phone`;
  }

  update(id: number, updatePhoneDto: UpdatePhoneDto) {
    return `This action updates a #${id} phone`;
  }

  remove(id: number) {
    return `This action removes a #${id} phone`;
  }
}
