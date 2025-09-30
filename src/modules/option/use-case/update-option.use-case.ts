import { UpdateOptionDto } from "../dto/update-option.dto";
import { UpdateOptionRepository } from "../repository/update-option.repository";
import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class UpdateOptionUseCase {
    constructor(
        private readonly updateOptionRepository: UpdateOptionRepository,
        private readonly logger: Logger,
        ){}

        async execute(id:string, data: UpdateOptionDto) {
            try {
                const option = await this.updateOptionRepository.UpdateOption(id, data);
                this.logger.log('Option with id ${id} updated successfully');
                return option;
            } catch (error) {
                this.logger.error(Error);
                throw  error;
            }
        }
}