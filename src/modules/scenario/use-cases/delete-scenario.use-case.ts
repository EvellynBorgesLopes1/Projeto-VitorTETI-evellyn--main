import { Injectable, Logger } from "@nestjs/common";
import { DeleteScenarioRepository } from "../repository/delete-scenario.repository";
import { CreateScenarioDto } from "../dto/create-scenario.dto";
@Injectable()
export class DeleteScenarioUseCase{
    constructor(
        private readonly deleteScenarioRepository: DeleteScenarioRepository,
        private readonly logger: Logger,
        ){}

    async execute(id:string) {
        try {
            const scenario = await this.deleteScenarioRepository.deleteScenario(id);
            this.logger.log('Scenario created: ${scenario.title}');
            return scenario;
        } catch (error) {
            this.logger.error(Error);
            throw  error;

        }
    }
}