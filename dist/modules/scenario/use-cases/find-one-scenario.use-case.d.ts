import { Logger, NotFoundException } from '@nestjs/common';
import { FindOneScenarioRepository } from '../repository/find-one-scenario.repository';
export declare class FindOneScenarioUseCase {
    private readonly findoneScenarioRepository;
    private readonly logger;
    constructor(findoneScenarioRepository: FindOneScenarioRepository, logger: Logger);
    findone(id: string): Promise<{
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    } | NotFoundException>;
}
