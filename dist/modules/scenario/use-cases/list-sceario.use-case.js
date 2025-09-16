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
var ListScenarioUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListScenarioUseCase = void 0;
const list_scenario_repository_1 = require("./../repository/list.scenario.repository");
const common_1 = require("@nestjs/common");
let ListScenarioUseCase = ListScenarioUseCase_1 = class ListScenarioUseCase {
    constructor(ListScenarioRepository, Logger) {
        this.ListScenarioRepository = ListScenarioRepository;
        this.Logger = Logger;
    }
    async execute() {
        try {
            const scenarios = await this.ListScenarioRepository.listScenario();
            this.Logger.log('Scenarios retrieved successfully', ListScenarioUseCase_1.name);
            return scenarios;
        }
        catch (err) {
            const error = new common_1.ServiceUnavailableException('error list scenarios', {
                cause: err,
                description: `Error on list scenarios: ${err.message}` || 'Unknown error occurred',
            });
            this.Logger.error(error.message, error.stack);
            throw error;
        }
    }
};
exports.ListScenarioUseCase = ListScenarioUseCase;
exports.ListScenarioUseCase = ListScenarioUseCase = ListScenarioUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [list_scenario_repository_1.ListScenarioRepository,
        common_1.Logger])
], ListScenarioUseCase);
//# sourceMappingURL=list-sceario.use-case.js.map