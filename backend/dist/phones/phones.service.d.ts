import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
export declare class PhonesService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findAll(): Promise<{
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
    findOne(id: number): Promise<{
        createdAt: Date;
        inches: number;
        price: number;
        color: string;
        type: string;
        raiting: number;
        urlImage: string;
        id: number;
    }>;
    update(id: number, updatePhoneDto: UpdatePhoneDto): Promise<{
        createdAt: Date;
        inches: number;
        price: number;
        color: string;
        type: string;
        raiting: number;
        urlImage: string;
        id: number;
    }>;
    remove(id: number): Promise<{
        createdAt: Date;
        inches: number;
        price: number;
        color: string;
        type: string;
        raiting: number;
        urlImage: string;
        id: number;
    }>;
    filterByColorRatingPagination(color: string, sort: any, page: any): Promise<{
        createdAt: Date;
        inches: number;
        price: number;
        color: string;
        type: string;
        raiting: number;
        urlImage: string;
        id: number;
    }[]>;
    filterByPriceWithPagination(price_from: number, price_to: number, page: any): Promise<{
        createdAt: Date;
        inches: number;
        price: number;
        color: string;
        type: string;
        raiting: number;
        urlImage: string;
        id: number;
    }[]>;
}
