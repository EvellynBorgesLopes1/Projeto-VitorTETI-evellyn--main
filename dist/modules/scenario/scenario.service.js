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
exports.ScenarioService = void 0;
const create_scenario_use_case_1 = require("./use-cases/create.scenario.use-case");
const common_1 = require("@nestjs/common");
let ScenarioService = class ScenarioService {
    constructor(CreateScenarioUseCase) {
        this.CreateScenarioUseCase = CreateScenarioUseCase;
    }
    create(data) {
        return this.CreateScenarioUseCase.execute(data);
    }
    findAll() {
        return `This action returns all scenario`;
    }
    findOne(id) {
        return `This action returns a #${id} scenario`;
    }
    update(id, updateScenarioDto) {
        return `This action updates a #${id} scenario`;
    }
    remove(id) {
        return `This action removes a #${id} scenario`;
    }
};
exports.ScenarioService = ScenarioService;
exports.ScenarioService = ScenarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [create_scenario_use_case_1.CreateScenarioUseCase])
], ScenarioService);
//# sourceMappingURL=scenario.service.js.map