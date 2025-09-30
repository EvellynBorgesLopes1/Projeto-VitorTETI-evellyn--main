import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { ListOptionRepository } from './../repository/list-option.repository';
import { Logger } from '@nestjs/common';


@Injectable()
export class ListOptionUseCase{
    constructor(
        private readonly listOptionRepository: ListOptionRepository,
        private readonly Logger: Logger,
        ){}
    async execute() {
        try {
            const option = await this.listOptionRepository.ListOption();
            this.Logger.log('Options list successfully', ListOptionUseCase.name);
            return option;
        } catch (err) {
            const error = new ServiceUnavailableException( 'error list option', {
                cause: err,
                description: `Error on list post: ${err.message}` || 'Unknown error occurred',
            });
            this.Logger.error(error.message, error.stack);
            throw error;
        }
    }
}
           