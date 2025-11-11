import { Logger } from '@nestjs/common';
import { DeleteOptionRepository } from '../repository/delete-option.repository';
export declare class DeleteOptionUseCase {
    private readonly deleteOptionRepository;
    private readonly logger;
    constructor(deleteOptionRepository: DeleteOptionRepository, logger: Logger);
    delete(id: string): Promise<{
        name: string;
        description: string | null;
        id: string;
        scenarioId: string;
    }>;
}
