import { Logger } from "@nestjs/common";
import { FindOneScenarioRepository } from "../repository/find-one-scenario.repository";
export declare class FindOneScenarioUseCase {
    private readonly findoneScenarioRepository;
    private readonly logger;
    constructor(findoneScenarioRepository: FindOneScenarioRepository, logger: Logger);
    execute(id: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
    }>;
    findOne(id: string): void;
}
