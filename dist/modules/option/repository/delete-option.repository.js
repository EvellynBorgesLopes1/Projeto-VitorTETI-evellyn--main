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
exports.DeleteOptionRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_database_1 = require("../../../shared/databases/prisma.database");
let DeleteOptionRepository = class DeleteOptionRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async DeleteOption(id) {
        const option = await this.prisma.option.delete({
            where: { id },
        });
        return option;
    }
};
exports.DeleteOptionRepository = DeleteOptionRepository;
exports.DeleteOptionRepository = DeleteOptionRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_database_1.PrismaService])
], DeleteOptionRepository);
//# sourceMappingURL=delete-option.repository.js.map