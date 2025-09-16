import { Injectable, Logger } from "@nestjs/common";
import { FindOneScenarioRepository } from "../repository/find-one-scenario.repository";

@Injectable()
export class FindOneScenarioUseCase {
    constructor(
        private readonly findoneScenarioRepository: FindOneScenarioRepository,
        private readonly logger: Logger,
        ){}

    async execute(id:string) {
        try {
            const scenario = await this.findoneScenarioRepository.findOne(id);
            return scenario;
        } catch (error) {
            this.logger.error(Error);
            throw  error;
        }
    }
    findOne(id: string) {
        throw new Error("Method not implemented.");
    }
}