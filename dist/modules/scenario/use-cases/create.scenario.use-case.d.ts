import { Logger } from "@nestjs/common";
import { CreateScenarioDto } from "../dto/create-scenario.dto";
import { CreateScenarioRepository } from "../repository/create-scenario.repository";
export declare class CreateScenarioUseCase {
    private readonly createscenariorepository;
    private readonly logger;
    constructor(createscenariorepository: CreateScenarioRepository, logger: Logger);
    execute(data: CreateScenarioDto): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
    }>;
}
