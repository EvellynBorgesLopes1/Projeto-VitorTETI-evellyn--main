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
const list_sceario_use_case_1 = require("./use-cases/list-sceario.use-case");
const common_1 = require("@nestjs/common");
const use_cases_1 = require("./use-cases");
let ScenarioService = class ScenarioService {
    constructor(createScenarioUseCase, listScenarioUseCase, updateScenarioUseCase, DeleteScenarioUseCase, findOneScenarioUseCase) {
        this.createScenarioUseCase = createScenarioUseCase;
        this.listScenarioUseCase = listScenarioUseCase;
        this.updateScenarioUseCase = updateScenarioUseCase;
        this.DeleteScenarioUseCase = DeleteScenarioUseCase;
        this.findOneScenarioUseCase = findOneScenarioUseCase;
    }
    create(data) {
        return this.createScenarioUseCase.execute(data);
    }
    findAll() {
        return this.listScenarioUseCase.execute();
    }
    findOne(id) {
        return this.findOneScenarioUseCase.execute(id);
    }
    update(id, data) {
        return this.updateScenarioUseCase.execute(id, data);
    }
    remove(id) {
        return this.DeleteScenarioUseCase.execute(id);
    }
};
exports.ScenarioService = ScenarioService;
exports.ScenarioService = ScenarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [use_cases_1.CreateScenarioUseCase,
        list_sceario_use_case_1.ListScenarioUseCase,
        use_cases_1.UpdateScenarioUseCase,
        use_cases_1.DeleteScenarioUseCase,
        use_cases_1.FindOneScenarioUseCase])
], ScenarioService);
//# sourceMappingURL=scenario.service.js.map