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
exports.FindOneScenarioRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_database_1 = require("../../../shared/databases/prisma.database");
let FindOneScenarioRepository = class FindOneScenarioRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findone(id) {
        const scenario = await this.prisma.scenario.findUnique({ where: { id } });
        return scenario;
    }
};
exports.FindOneScenarioRepository = FindOneScenarioRepository;
exports.FindOneScenarioRepository = FindOneScenarioRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_database_1.PrismaService])
], FindOneScenarioRepository);
//# sourceMappingURL=find-one-scenario.repository.js.map