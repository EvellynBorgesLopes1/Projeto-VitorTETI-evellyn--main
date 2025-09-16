import { Logger } from "@nestjs/common";
import { ListScenarioRepository } from "../repository";
export declare class ListScenarioUseCase {
    private readonly listScenarioRepository;
    private readonly logger;
    constructor(listScenarioRepository: ListScenarioRepository, logger: Logger);
    execute(): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
    }[]>;
}
