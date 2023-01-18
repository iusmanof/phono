"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhonesService = void 0;
const common_1 = require("@nestjs/common");
let phonesTest = [
    {
        id: 1000,
        inches: 6.20,
        price: "$701.00",
        color: "red",
        type: "Android Phone",
        raiting: 4.3,
        urlImage: "https://res.cloudinary.com/dxedgvxdu/image/upload/v1672321789/phono/mobile_dhbboj.png"
    },
    {
        id: 1001,
        inches: 6.22,
        price: "$101.00",
        color: "blue",
        type: "iPhone",
        raiting: 4.8,
        urlImage: "https://res.cloudinary.com/dxedgvxdu/image/upload/v1672321789/phono/mobile_dhbboj.png"
    },
    {
        id: 1002,
        inches: 3.20,
        price: "$51.00",
        color: "black",
        type: "Smartphone",
        raiting: 3.3,
        urlImage: "https://res.cloudinary.com/dxedgvxdu/image/upload/v1672321789/phono/mobile_dhbboj.png"
    }
];
let PhonesService = class PhonesService {
    create(createPhoneDto) {
        return 'This action adds a new phone';
    }
    findAll() {
        return phonesTest;
    }
    findOne(id) {
        return `This action returns a #${id} phone`;
    }
    update(id, updatePhoneDto) {
        return `This action updates a #${id} phone`;
    }
    remove(id) {
        return `This action removes a #${id} phone`;
    }
};
PhonesService = __decorate([
    (0, common_1.Injectable)()
], PhonesService);
exports.PhonesService = PhonesService;
//# sourceMappingURL=phones.service.js.map