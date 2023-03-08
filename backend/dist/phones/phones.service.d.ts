import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
export declare class PhonesService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findAll(): Promise<{
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
    findOne(id: number): Promise<{
        inches: number;
        price: number;
        color: string;
        type: string;
        raiting: number;
        urlImage: string;
        createdAt: Date;
        id: number;
    }>;
    update(id: number, updatePhoneDto: UpdatePhoneDto): Promise<{
        inches: number;
        price: number;
        color: string;
        type: string;
        raiting: number;
        urlImage: string;
        createdAt: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        inches: number;
        price: number;
        color: string;
        type: string;
        raiting: number;
        urlImage: string;
        createdAt: Date;
        id: number;
    }>;
    filterByColorRatingPagination(color: string, sort: any, page: any): Promise<{
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
    filterByPriceWithPagination(price_from: number, price_to: number, page: any): Promise<{
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
}
