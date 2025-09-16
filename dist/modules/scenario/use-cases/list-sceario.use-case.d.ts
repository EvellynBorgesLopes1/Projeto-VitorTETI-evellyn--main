import { ListScenarioRepository } from './../repository/list.scenario.repository';
import { Logger } from "@nestjs/common";
export declare class ListScenarioUseCase {
    private readonly ListScenarioRepository;
    private readonly Logger;
    constructor(ListScenarioRepository: ListScenarioRepository, Logger: Logger);
    execute(): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
    }[]>;
}
