"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhonesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const phonesTest = [
    {
        id: 1000,
        inches: 6.2,
        price: '$701.00',
        color: 'red',
        type: 'Android Phone',
        raiting: 4.3,
        urlImage: 'https://res.cloudinary.com/dxedgvxdu/image/upload/v1672321789/phono/mobile_dhbboj.png',
    },
    {
        id: 1001,
        inches: 6.22,
        price: '$101.00',
        color: 'blue',
        type: 'iPhone',
        raiting: 4.8,
        urlImage: 'https://res.cloudinary.com/dxedgvxdu/image/upload/v1672321789/phono/mobile_dhbboj.png',
    },
    {
        id: 1002,
        inches: 3.2,
        price: '$51.00',
        color: 'black',
        type: 'Smartphone',
        raiting: 3.3,
        urlImage: 'https://res.cloudinary.com/dxedgvxdu/image/upload/v1672321789/phono/mobile_dhbboj.png',
    },
];
let PhonesService = class PhonesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPhoneDto) {
        const newPhone = await this.prisma.phone.create({
            data: Object.assign({}, createPhoneDto),
        });
        return newPhone;
    }
    async findAll() {
        return await this.prisma.phone.findMany({ take: 6 });
    }
    async findOne(id) {
        return await this.prisma.phone.findUnique({
            where: {
                id: id,
            },
        });
    }
    async update(id, updatePhoneDto) {
        return await this.prisma.phone.update({
            where: {
                id: id,
            },
            data: Object.assign({}, updatePhoneDto),
        });
    }
    async remove(id) {
        return await this.prisma.phone.delete({
            where: {
                id: id,
            },
        });
    }
    async filterByColorRatingPagination(color, sort, page) {
        const showItemsOnPage = 6;
        const offset = (page - 1) * showItemsOnPage;
        return await this.prisma.phone.findMany({
            skip: offset,
            take: showItemsOnPage,
            where: {
                color: {
                    startsWith: color,
                },
            },
            orderBy: {
                raiting: sort,
            },
        });
    }
};
PhonesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PhonesService);
exports.PhonesService = PhonesService;
//# sourceMappingURL=phones.service.js.map