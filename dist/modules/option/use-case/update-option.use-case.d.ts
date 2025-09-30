import { Logger } from '@nestjs/common';
import { UpdateOptionRepository } from '../repository';
import { UpdateOptionDto } from '../dto/update-option.dto';
export declare class UpdateOptionUseCase {
    private readonly updateOptionRepository;
    private readonly logger;
    constructor(updateOptionRepository: UpdateOptionRepository, logger: Logger);
    execute(id: string, data: UpdateOptionDto): Promise<void>;
}
