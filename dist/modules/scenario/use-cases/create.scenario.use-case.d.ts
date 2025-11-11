import { Logger } from '@nestjs/common';
import { CreateScenarioRepository } from '../repository/create-scenario.repository';
import { CreateScenarioDto } from '../dto/create-scenario.dto';
export declare class CreateScenarioUseCase {
    private readonly createScenarioRepository;
    private readonly logger;
    constructor(createScenarioRepository: CreateScenarioRepository, logger: Logger);
    execute(data: CreateScenarioDto): Promise<{
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    }>;
}
