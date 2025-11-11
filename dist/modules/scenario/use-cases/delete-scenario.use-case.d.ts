import { Logger } from '@nestjs/common';
import { DeleteScenarioRepository } from '../repository/delete-scenario.repository';
export declare class DeleteScenarioUseCase {
    private readonly deleteScenarioRepository;
    private readonly logger;
    constructor(deleteScenarioRepository: DeleteScenarioRepository, logger: Logger);
    delete(id: string): Promise<{
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    }>;
}
