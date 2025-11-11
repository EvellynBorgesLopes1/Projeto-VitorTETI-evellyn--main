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
exports.FindOneOptionUseCase = void 0;
const common_1 = require("@nestjs/common");
const find_one_option_repository_1 = require("../repository/find-one-option.repository");
let FindOneOptionUseCase = class FindOneOptionUseCase {
    constructor(findoneOptionRepository, logger) {
        this.findoneOptionRepository = findoneOptionRepository;
        this.logger = logger;
    }
    async findone(id) {
        try {
            const option = await this.findoneOptionRepository.findone(id);
            this.logger.log("Option found successfully");
            if (!option)
                return new common_1.NotFoundException("Option not found");
            return option;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                this.logger.warn("Option not found");
            }
            this.logger.error(error);
            throw error;
        }
    }
};
exports.FindOneOptionUseCase = FindOneOptionUseCase;
exports.FindOneOptionUseCase = FindOneOptionUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [find_one_option_repository_1.FindOneOptionRepository,
        common_1.Logger])
], FindOneOptionUseCase);
//# sourceMappingURL=find-one-option.use-case.js.map