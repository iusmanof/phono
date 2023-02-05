import { PhonesService } from './phones.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { Request } from 'express';
export declare class PhonesController {
    private readonly phonesService;
    constructor(phonesService: PhonesService);
    create(createPhoneDto: CreatePhoneDto): Promise<import(".prisma/client").Phone>;
    findAll(request: Request): Promise<import(".prisma/client").Phone[]>;
    findOne(id: string): Promise<import(".prisma/client").Phone>;
    update(id: string, updatePhoneDto: UpdatePhoneDto): Promise<import(".prisma/client").Phone>;
    remove(id: string): Promise<import(".prisma/client").Phone>;
}
