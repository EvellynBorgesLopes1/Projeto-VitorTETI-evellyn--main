import { Logger } from '@nestjs/common';
import { ListOptionRepository } from '../repository/list-option.repository';
export declare class ListOptionUseCase {
    private readonly listOptionRepository;
    private readonly logger;
    constructor(listOptionRepository: ListOptionRepository, logger: Logger);
    list(): Promise<({
        scores: {
            id: string;
            optionId: string;
            criterionId: string;
        }[];
    } & {
        name: string;
        description: string | null;
        id: string;
        scenarioId: string;
    })[]>;
}
