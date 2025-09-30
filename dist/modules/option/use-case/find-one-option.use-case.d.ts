import { Logger } from "@nestjs/common";
import { FindOneOptionRepository } from "../repository";
export declare class FindOneOptionUseCase {
    private readonly findOneOptionRepository;
    private readonly logger;
    constructor(findOneOptionRepository: FindOneOptionRepository, logger: Logger);
    execute(id: string): Promise<{
        id: string;
        description: string | null;
        name: string;
        scenarioId: string;
    }>;
}
