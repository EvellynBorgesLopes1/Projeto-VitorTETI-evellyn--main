import { Logger } from '@nestjs/common';
import { UpdateOptionRepository } from '../repository/update-option.repository';
import { UpdateOptionDto } from '../dto/update-option.dto';
export declare class UpdateOptionUseCase {
    private readonly updateOptionRepository;
    private readonly logger;
    constructor(updateOptionRepository: UpdateOptionRepository, logger: Logger);
    update(id: string, data: UpdateOptionDto): Promise<{
        name: string;
        description: string | null;
        id: string;
        scenarioId: string;
    }>;
}
