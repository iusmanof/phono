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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhonesController = void 0;
const common_1 = require("@nestjs/common");
const phones_service_1 = require("./phones.service");
const create_phone_dto_1 = require("./dto/create-phone.dto");
const update_phone_dto_1 = require("./dto/update-phone.dto");
let PhonesController = class PhonesController {
    constructor(phonesService) {
        this.phonesService = phonesService;
    }
    create(createPhoneDto) {
        return this.phonesService.create(createPhoneDto);
    }
    findAll(request) {
        if (request.query.color || request.query.raiting || request.query.page) {
            const color = request.query.color;
            const sort = request.query.raiting;
            const page = request.query.page;
            return this.phonesService.filterByColorRatingPagination(color, sort, page);
        }
        if (request.query.price_from ||
            request.query.price_to ||
            request.query.page) {
            const price_from = Number(request.query.price_from);
            const price_to = Number(request.query.price_to);
            const page = request.query.page;
            return this.phonesService.filterByPriceWithPagination(price_from, price_to, page);
        }
        return this.phonesService.findAll();
    }
    findOne(id) {
        return this.phonesService.findOne(+id);
    }
    update(id, updatePhoneDto) {
        return this.phonesService.update(+id, updatePhoneDto);
    }
    remove(id) {
        return this.phonesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_phone_dto_1.CreatePhoneDto]),
    __metadata("design:returntype", void 0)
], PhonesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PhonesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhonesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_phone_dto_1.UpdatePhoneDto]),
    __metadata("design:returntype", void 0)
], PhonesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhonesController.prototype, "remove", null);
PhonesController = __decorate([
    (0, common_1.Controller)('phones'),
    __metadata("design:paramtypes", [phones_service_1.PhonesService])
], PhonesController);
exports.PhonesController = PhonesController;
//# sourceMappingURL=phones.controller.js.map