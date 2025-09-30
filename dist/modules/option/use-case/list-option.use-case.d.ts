import { ListOptionRepository } from './../repository/list-option.repository';
import { Logger } from '@nestjs/common';
export declare class ListOptionUseCase {
    private readonly listOptionRepository;
    private readonly Logger;
    constructor(listOptionRepository: ListOptionRepository, Logger: Logger);
    execute(): Promise<({
        scenario: {
            id: string;
            title: string;
            description: string | null;
            createdAt: Date;
        };
    } & {
        id: string;
        description: string | null;
        name: string;
        scenarioId: string;
    })[]>;
}
