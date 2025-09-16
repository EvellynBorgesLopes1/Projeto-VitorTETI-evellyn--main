import { UpdateScenarioRepository } from '../repository/update-scenario.repository';
import { UpdateScenarioDto } from './../dto/update-scenario.dto';
import { Logger } from "@nestjs/common";
export declare class UpdateScenarioUseCase {
    private readonly updateScenarioRepository;
    private readonly logger;
    constructor(updateScenarioRepository: UpdateScenarioRepository, logger: Logger);
    execute(id: string, data: UpdateScenarioDto): Promise<{
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    }>;
}
