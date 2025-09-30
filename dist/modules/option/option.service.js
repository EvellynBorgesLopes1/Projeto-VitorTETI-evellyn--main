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
exports.OptionService = void 0;
const common_1 = require("@nestjs/common");
const use_case_1 = require("./use-case");
let OptionService = class OptionService {
    constructor(deleteOptionUseCase, updateOptionUseCase, findOneOptionUseCase, listOptionUseCase, createOptionUseCase) {
        this.deleteOptionUseCase = deleteOptionUseCase;
        this.updateOptionUseCase = updateOptionUseCase;
        this.findOneOptionUseCase = findOneOptionUseCase;
        this.listOptionUseCase = listOptionUseCase;
        this.createOptionUseCase = createOptionUseCase;
    }
    create(data) {
        return this.createOptionUseCase.execute(data);
    }
    findAll() {
        return this.listOptionUseCase.execute();
    }
    findOne(id) {
        return this.findOneOptionUseCase.execute(id);
    }
    update(id, data) {
        return this.updateOptionUseCase.execute(id, data);
    }
    remove(id) {
        return this.deleteOptionUseCase.execute(id);
    }
};
exports.OptionService = OptionService;
exports.OptionService = OptionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [use_case_1.DeleteOptionUseCase,
        use_case_1.UpdateOptionUseCase,
        use_case_1.FindOneOptionUseCase,
        use_case_1.ListOptionUseCase,
        use_case_1.CreateOptionUseCase])
], OptionService);
//# sourceMappingURL=option.service.js.map