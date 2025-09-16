import { Logger } from "@nestjs/common";
import { DeleteScenarioRepository } from "../repository/delete-scenario.repository";
export declare class DeleteScenarioUseCase {
    private readonly deleteScenarioRepository;
    private readonly logger;
    constructor(deleteScenarioRepository: DeleteScenarioRepository, logger: Logger);
    execute(id: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
    }>;
}
