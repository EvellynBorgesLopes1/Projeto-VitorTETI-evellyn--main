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
exports.DeleteOptionUseCase = void 0;
const common_1 = require("@nestjs/common");
const delete_option_repository_1 = require("../repository/delete-option.repository");
let DeleteOptionUseCase = class DeleteOptionUseCase {
    constructor(deleteOptionRepository, logger) {
        this.deleteOptionRepository = deleteOptionRepository;
        this.logger = logger;
    }
    async delete(id) {
        try {
            const option = await this.deleteOptionRepository.delete(id);
            this.logger.log("Option deleted successfully");
            return option;
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
};
exports.DeleteOptionUseCase = DeleteOptionUseCase;
exports.DeleteOptionUseCase = DeleteOptionUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [delete_option_repository_1.DeleteOptionRepository,
        common_1.Logger])
], DeleteOptionUseCase);
//# sourceMappingURL=delete-option.use-case.js.map