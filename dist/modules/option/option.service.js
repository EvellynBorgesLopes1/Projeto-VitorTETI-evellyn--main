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
    constructor(createOptionUseCase, listOptionUseCase, findoneOptionUseCase, deleteOptionUseCase, updateOptionUseCase) {
        this.createOptionUseCase = createOptionUseCase;
        this.listOptionUseCase = listOptionUseCase;
        this.findoneOptionUseCase = findoneOptionUseCase;
        this.deleteOptionUseCase = deleteOptionUseCase;
        this.updateOptionUseCase = updateOptionUseCase;
    }
    create(data) {
        return this.createOptionUseCase.execute(data);
    }
    findAll() {
        return this.listOptionUseCase.list();
    }
    findOne(id) {
        return this.findoneOptionUseCase.findone(id);
    }
    update(id, data) {
        return this.updateOptionUseCase.update(id, data);
    }
    remove(id) {
        return this.deleteOptionUseCase.delete(id);
    }
};
exports.OptionService = OptionService;
exports.OptionService = OptionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [use_case_1.CreateOptionUseCase,
        use_case_1.ListOptionUseCase,
        use_case_1.FindOneOptionUseCase,
        use_case_1.DeleteOptionUseCase,
        use_case_1.UpdateOptionUseCase])
], OptionService);
//# sourceMappingURL=option.service.js.map