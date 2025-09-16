"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioModule = void 0;
const common_1 = require("@nestjs/common");
const scenario_service_1 = require("./scenario.service");
const scenario_controller_1 = require("./scenario.controller");
const UsesCases = require("./use-cases");
const Repositories = require("./repository");
const shared_module_1 = require("../../shared/shared.module");
const useCases = Object.values(UsesCases);
const repositories = Object.values(Repositories);
let ScenarioModule = class ScenarioModule {
};
exports.ScenarioModule = ScenarioModule;
exports.ScenarioModule = ScenarioModule = __decorate([
    (0, common_1.Module)({
        imports: [shared_module_1.SharedModule],
        controllers: [scenario_controller_1.ScenarioController],
        providers: [scenario_service_1.ScenarioService, ...useCases, ...repositories, common_1.Logger],
    })
], ScenarioModule);
//# sourceMappingURL=scenario.module.js.map