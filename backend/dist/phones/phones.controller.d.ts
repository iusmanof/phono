import { PhonesService } from './phones.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { Request } from 'express';
export declare class PhonesController {
    private readonly phonesService;
    constructor(phonesService: PhonesService);
    create(createPhoneDto: CreatePhoneDto): Promise<{
        createdAt: Date;
        inches: number;
        price: number;
        color: string;
        type: string;
        raiting: number;
        urlImage: string;
        id: number;
    }>;
    findAll(request: Request): Promise<{
        data: {
            createdAt: Date;
            inches: number;
            price: number;
            color: string;
            type: string;
            raiting: number;
            urlImage: string;
            id: number;
        }[];
        meta: {
            total: number;
            take: any;
            pages: number;
        };
    }> | Promise<{
        data: {
            createdAt: Date;
            inches: number;
            price: number;
            color: string;
            type: string;
            raiting: number;
            urlImage: string;
            id: number;
        }[];
        meta: {
            total: number;
            prismaTake: number;
            pages: number;
        };
    }>;
    findOne(id: string): Promise<{
        createdAt: Date;
        inches: number;
        price: number;
        color: string;
        type: string;
        raiting: number;
        urlImage: string;
        id: number;
    }>;
    update(id: string, updatePhoneDto: UpdatePhoneDto): Promise<{
        createdAt: Date;
        inches: number;
        price: number;
        color: string;
        type: string;
        raiting: number;
        urlImage: string;
        id: number;
    }>;
    remove(id: string): Promise<{
        createdAt: Date;
        inches: number;
        price: number;
        color: string;
        type: string;
        raiting: number;
        urlImage: string;
        id: number;
    }>;
}
