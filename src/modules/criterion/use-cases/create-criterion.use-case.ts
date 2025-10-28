import { Injectable, Logger } from '@nestjs/common';
import { CreateCriterionDto } from '../dto/create-criterion.dto';
import { CreateCriterionRepository } from '../repository/create-criterion.repository';



@Injectable()
export class CreateCriterionUseCase {
    constructor(
        private readonly createCriterionRepository: CreateCriterionRepository,
        private readonly logger: Logger,
    ) {}

    async execute(data: CreateCriterionDto){
        try {
            const criterion = this.createCriterionRepository.create(data);
            this.logger.log('Criterion created successfully');
            return criterion;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}