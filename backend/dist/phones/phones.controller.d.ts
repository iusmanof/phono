import { PhonesService } from './phones.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
export declare class PhonesController {
    private readonly phonesService;
    constructor(phonesService: PhonesService);
    create(createPhoneDto: CreatePhoneDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePhoneDto: UpdatePhoneDto): string;
    remove(id: string): string;
}
