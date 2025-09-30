import { Logger } from "@nestjs/common";
import { DeleteOptionRepository } from "../repository";
export declare class DeleteOptionUseCase {
    private readonly deleteOptionRepository;
    private readonly logger;
    constructor(deleteOptionRepository: DeleteOptionRepository, logger: Logger);
    execute(id: string): Promise<{
        id: string;
        description: string | null;
        name: string;
        scenarioId: string;
    }>;
}
