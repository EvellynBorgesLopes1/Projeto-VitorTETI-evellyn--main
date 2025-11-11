import { Logger } from '@nestjs/common';
import { CreateOptionRepository } from '../repository/create-option.repository';
import { CreateOptionDto } from '../dto/create-option.dto';
export declare class CreateOptionUseCase {
    private readonly createOptionRepository;
    private readonly logger;
    constructor(createOptionRepository: CreateOptionRepository, logger: Logger);
    execute(data: CreateOptionDto): Promise<{
        name: string;
        description: string | null;
        id: string;
        scenarioId: string;
    }>;
}
