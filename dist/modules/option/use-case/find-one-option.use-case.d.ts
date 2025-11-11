import { Logger, NotFoundException } from '@nestjs/common';
import { FindOneOptionRepository } from '../repository/find-one-option.repository';
export declare class FindOneOptionUseCase {
    private readonly findoneOptionRepository;
    private readonly logger;
    constructor(findoneOptionRepository: FindOneOptionRepository, logger: Logger);
    findone(id: string): Promise<NotFoundException | {
        name: string;
        description: string | null;
        id: string;
        scenarioId: string;
    }>;
}
