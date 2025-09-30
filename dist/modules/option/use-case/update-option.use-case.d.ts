import { UpdateOptionDto } from "../dto/update-option.dto";
import { UpdateOptionRepository } from "../repository/update-option.repository";
import { Logger } from "@nestjs/common";
export declare class UpdateOptionUseCase {
    private readonly updateOptionRepository;
    private readonly logger;
    constructor(updateOptionRepository: UpdateOptionRepository, logger: Logger);
    execute(id: string, data: UpdateOptionDto): Promise<void>;
}
