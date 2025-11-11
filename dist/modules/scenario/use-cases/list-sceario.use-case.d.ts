import { Logger } from '@nestjs/common';
import { ListScenarioRepository } from '../repository/list.scenario.repository';
export declare class ListScenarioUseCase {
    private readonly listScenarioRepository;
    private readonly logger;
    constructor(listScenarioRepository: ListScenarioRepository, logger: Logger);
    list(): Promise<({
        options: {
            name: string;
            description: string | null;
            id: string;
            scenarioId: string;
        }[];
    } & {
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    })[]>;
}
