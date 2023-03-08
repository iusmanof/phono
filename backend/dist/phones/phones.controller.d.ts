import { PhonesService } from './phones.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { Request } from 'express';
export declare class PhonesController {
    private readonly phonesService;
    constructor(phonesService: PhonesService);
    create(createPhoneDto: CreatePhoneDto): Promise<{
        inches: number;
        price: number;
        color: string;
        type: string;
        raiting: number;
        urlImage: string;
        createdAt: Date;
        id: number;
    }>;
    findAll(request: Request): Promise<{
        data: {
            inches: number;
            price: number;
            color: string;
            type: string;
            raiting: number;
            urlImage: string;
            createdAt: Date;
            id: number;
        }[];
        meta: {
            total: number;
            prismaTake: number;
            pages: number;
        };
    }>;
    findOne(id: string): Promise<{
        inches: number;
        price: number;
        color: string;
        type: string;
        raiting: number;
        urlImage: string;
        createdAt: Date;
        id: number;
    }>;
    update(id: string, updatePhoneDto: UpdatePhoneDto): Promise<{
        inches: number;
        price: number;
        color: string;
        type: string;
        raiting: number;
        urlImage: string;
        createdAt: Date;
        id: number;
    }>;
    remove(id: string): Promise<{
        inches: number;
        price: number;
        color: string;
        type: string;
        raiting: number;
        urlImage: string;
        createdAt: Date;
        id: number;
    }>;
}
