import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
export declare class PhonesService {
    create(createPhoneDto: CreatePhoneDto): string;
    findAll(): {
        id: number;
        inches: number;
        price: string;
        color: string;
        type: string;
        raiting: number;
        urlImage: string;
    }[];
    findOne(id: number): string;
    update(id: number, updatePhoneDto: UpdatePhoneDto): string;
    remove(id: number): string;
}