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
exports.DeleteScenarioUseCase = void 0;
const common_1 = require("@nestjs/common");
const delete_scenario_repository_1 = require("../repository/delete-scenario.repository");
let DeleteScenarioUseCase = class DeleteScenarioUseCase {
    constructor(deleteScenarioRepository, logger) {
        this.deleteScenarioRepository = deleteScenarioRepository;
        this.logger = logger;
    }
    async execute(id) {
        try {
            const scenario = await this.deleteScenarioRepository.deleteScenario(id);
            this.logger.log('Scenario created: ${scenario.title}');
            return scenario;
        }
        catch (error) {
            this.logger.error(Error);
            throw error;
        }
    }
};
exports.DeleteScenarioUseCase = DeleteScenarioUseCase;
exports.DeleteScenarioUseCase = DeleteScenarioUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [delete_scenario_repository_1.DeleteScenarioRepository,
        common_1.Logger])
], DeleteScenarioUseCase);
//# sourceMappingURL=delete-scenario.use-case.js.map