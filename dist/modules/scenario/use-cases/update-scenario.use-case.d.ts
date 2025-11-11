import { Logger } from '@nestjs/common';
import { UpdateScenarioRepository } from '../repository/update-scenario.repository';
import { UpdateScenarioDto } from '../dto/update-scenario.dto';
export declare class UpdateScenarioUseCase {
    private readonly updateScenarioRepository;
    private readonly logger;
    constructor(updateScenarioRepository: UpdateScenarioRepository, logger: Logger);
    update(id: string, data: UpdateScenarioDto): Promise<{
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    }>;
}
