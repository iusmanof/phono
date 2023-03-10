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
let PhonesService = class PhonesService {
    constructor(prisma) {
        this.prisma = prisma;
        this.prismaTake = 6;
    }
    async create(createPhoneDto) {
        const newPhone = await this.prisma.phone.create({
            data: Object.assign({}, createPhoneDto),
        });
        return newPhone;
    }
    async findAll() {
        const totalData = await this.prisma.phone.findMany();
        const pages = Math.ceil(totalData.length / this.prismaTake);
        const meta = { total: totalData.length, prismaTake: this.prismaTake, pages };
        const phonesWithPagination = await this.prisma.phone.findMany({
            take: this.prismaTake,
        });
        return { data: phonesWithPagination, meta };
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
    async universalRequest(obj) {
        let whereData = {};
        let orderByData = [];
        if (obj.color) {
            whereData = Object.assign({ color: obj.color }, whereData);
        }
        if (obj.price_from || obj.price_to) {
            whereData = Object.assign({ price: { gte: obj.price_from || 0, lte: obj.price_to || 999999 } }, whereData);
        }
        if (obj.sorting) {
            orderByData.push({ price: obj.sorting });
        }
        const offset = (obj.page - 1) * obj.take;
        const phonesWithWhere = await this.prisma.phone.findMany({
            skip: offset || 0,
            take: obj.take,
            where: whereData,
            orderBy: orderByData
        });
        console.log(phonesWithWhere);
        return phonesWithWhere;
    }
};
PhonesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PhonesService);
exports.PhonesService = PhonesService;
//# sourceMappingURL=phones.service.js.map