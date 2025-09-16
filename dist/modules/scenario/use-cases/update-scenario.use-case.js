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
exports.UpdateScenarioUseCase = void 0;
const update_scenario_repository_1 = require("../repository/update-scenario.repository");
const common_1 = require("@nestjs/common");
let UpdateScenarioUseCase = class UpdateScenarioUseCase {
    constructor(updateScenarioRepository, logger) {
        this.updateScenarioRepository = updateScenarioRepository;
        this.logger = logger;
    }
    async execute(id, data) {
        try {
            const scenario = await this.updateScenarioRepository.updateScenario(id, data);
            this.logger.log('Scenario with id ${id} updated successfully');
            return scenario;
        }
        catch (error) {
            this.logger.error(Error);
            throw error;
        }
    }
};
exports.UpdateScenarioUseCase = UpdateScenarioUseCase;
exports.UpdateScenarioUseCase = UpdateScenarioUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [update_scenario_repository_1.UpdateScenarioRepository,
        common_1.Logger])
], UpdateScenarioUseCase);
//# sourceMappingURL=update-scenario.use-case.js.map