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
exports.ListScenarioUseCase = void 0;
const common_1 = require("@nestjs/common");
const list_scenario_repository_1 = require("../repository/list.scenario.repository");
let ListScenarioUseCase = class ListScenarioUseCase {
    constructor(listScenarioRepository, logger) {
        this.listScenarioRepository = listScenarioRepository;
        this.logger = logger;
    }
    async list() {
        try {
            const scenario = this.listScenarioRepository.list();
            this.logger.log("Scenario listed successfully");
            return scenario;
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
};
exports.ListScenarioUseCase = ListScenarioUseCase;
exports.ListScenarioUseCase = ListScenarioUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [list_scenario_repository_1.ListScenarioRepository,
        common_1.Logger])
], ListScenarioUseCase);
//# sourceMappingURL=list-sceario.use-case.js.map