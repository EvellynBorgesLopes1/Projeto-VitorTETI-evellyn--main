import { error } from 'console';
import { ListScenarioRepository } from './../repository/list.scenario.repository';
import { Injectable, Logger, ServiceUnavailableException } from "@nestjs/common";

@Injectable()
export class ListScenarioUseCase{
    constructor(
        private readonly ListScenarioRepository: ListScenarioRepository,
        private readonly Logger: Logger,
        ){}
    async execute() {
        try {
            const scenarios = await this.ListScenarioRepository.listScenario();
            this.Logger.log('Scenarios retrieved successfully', ListScenarioUseCase.name);
            return scenarios;
        } catch (err) {
            const error = new ServiceUnavailableException( 'error list scenarios', {
                cause: err,
                description: `Error on list scenarios: ${err.message}` || 'Unknown error occurred',
            });
            this.Logger.error(error.message, error.stack);
            throw error;
        }
    }
}
            