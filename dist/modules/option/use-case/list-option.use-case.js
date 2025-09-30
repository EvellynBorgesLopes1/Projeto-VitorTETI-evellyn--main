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
var ListOptionUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOptionUseCase = void 0;
const common_1 = require("@nestjs/common");
const list_option_repository_1 = require("./../repository/list-option.repository");
const common_2 = require("@nestjs/common");
let ListOptionUseCase = ListOptionUseCase_1 = class ListOptionUseCase {
    constructor(listOptionRepository, Logger) {
        this.listOptionRepository = listOptionRepository;
        this.Logger = Logger;
    }
    async execute() {
        try {
            const option = await this.listOptionRepository.ListOption();
            this.Logger.log('Scenarios list successfully', ListOptionUseCase_1.name);
            return option;
        }
        catch (err) {
            const error = new common_1.ServiceUnavailableException('error list option', {
                cause: err,
                description: `Error on list post: ${err.message}` || 'Unknown error occurred',
            });
            this.Logger.error(error.message, error.stack);
            throw error;
        }
    }
};
exports.ListOptionUseCase = ListOptionUseCase;
exports.ListOptionUseCase = ListOptionUseCase = ListOptionUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [list_option_repository_1.ListOptionRepository,
        common_2.Logger])
], ListOptionUseCase);
//# sourceMappingURL=list-option.use-case.js.map