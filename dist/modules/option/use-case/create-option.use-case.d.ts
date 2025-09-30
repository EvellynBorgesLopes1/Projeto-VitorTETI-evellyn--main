import { Logger } from '@nestjs/common';
import { CreateOptionDto } from '../dto/create-option.dto';
import { CreateOptionRepository } from '../repository';
export declare class CreateOptionUseCase {
    private readonly createOptionRepository;
    private readonly logger;
    constructor(createOptionRepository: CreateOptionRepository, logger: Logger);
    execute(data: CreateOptionDto): Promise<{
        id: string;
        description: string | null;
        name: string;
        scenarioId: string;
    }>;
}
