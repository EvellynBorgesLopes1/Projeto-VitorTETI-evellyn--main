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
exports.UpdateOptionUseCase = void 0;
const update_option_repository_1 = require("../repository/update-option.repository");
const common_1 = require("@nestjs/common");
let UpdateOptionUseCase = class UpdateOptionUseCase {
    constructor(updateOptionRepository, logger) {
        this.updateOptionRepository = updateOptionRepository;
        this.logger = logger;
    }
    async execute(id, data) {
        try {
            const option = await this.updateOptionRepository.UpdateOption(id, data);
            this.logger.log('Option with id ${id} updated successfully');
            return option;
        }
        catch (error) {
            this.logger.error(Error);
            throw error;
        }
    }
};
exports.UpdateOptionUseCase = UpdateOptionUseCase;
exports.UpdateOptionUseCase = UpdateOptionUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [update_option_repository_1.UpdateOptionRepository,
        common_1.Logger])
], UpdateOptionUseCase);
//# sourceMappingURL=update-option.use-case.js.map