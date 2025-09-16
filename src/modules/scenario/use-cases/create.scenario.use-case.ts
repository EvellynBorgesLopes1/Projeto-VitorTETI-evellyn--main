import { Injectable, Logger } from "@nestjs/common";
import { CreateScenarioDto } from "../dto/create-scenario.dto";
import { CreateScenarioRepository } from "../repository/create-scenario.repository";

@Injectable()
export class CreateScenarioUseCase {
    constructor(
        private readonly createscenariorepository:CreateScenarioRepository,
        private readonly logger: Logger
    ) {}

    async execute(data: CreateScenarioDto) {
        try {
            const scenario = await this.createscenariorepository.create(data);
            return scenario;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}