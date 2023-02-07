import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
export declare class PhonesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPhoneDto: CreatePhoneDto): Promise<import(".prisma/client").Phone>;
    findAll(): Promise<import(".prisma/client").Phone[]>;
    findOne(id: number): Promise<import(".prisma/client").Phone>;
    update(id: number, updatePhoneDto: UpdatePhoneDto): Promise<import(".prisma/client").Phone>;
    remove(id: number): Promise<import(".prisma/client").Phone>;
    filterByColorRatingPagination(color: string, sort: any, page: any): Promise<import(".prisma/client").Phone[]>;
    filterByPriceWithPagination(price_from: number, price_to: number, page: any): Promise<import(".prisma/client").Phone[]>;
}
