"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateScenarioDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_scenario_dto_1 = require("./create-scenario.dto");
class UpdateScenarioDto extends (0, mapped_types_1.PartialType)(create_scenario_dto_1.CreateScenarioDto) {
}
exports.UpdateScenarioDto = UpdateScenarioDto;
//# sourceMappingURL=update-scenario.dto.js.map