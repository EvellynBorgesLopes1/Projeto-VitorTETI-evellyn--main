import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { CreateOptionUseCase, DeleteOptionUseCase, FindOneOptionUseCase, ListOptionUseCase, UpdateOptionUseCase } from './use-case';
export declare class OptionService {
    private readonly deleteOptionUseCase;
    private readonly updateOptionUseCase;
    private readonly findOneOptionUseCase;
    private readonly listOptionUseCase;
    private readonly createOptionUseCase;
    constructor(deleteOptionUseCase: DeleteOptionUseCase, updateOptionUseCase: UpdateOptionUseCase, findOneOptionUseCase: FindOneOptionUseCase, listOptionUseCase: ListOptionUseCase, createOptionUseCase: CreateOptionUseCase);
    create(data: CreateOptionDto): Promise<{
        id: string;
        description: string | null;
        name: string;
        scenarioId: string;
    }>;
    findAll(): Promise<({
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
    findOne(id: string): Promise<{
        id: string;
        description: string | null;
        name: string;
        scenarioId: string;
    }>;
    update(id: string, data: UpdateOptionDto): Promise<void>;
    remove(id: string): Promise<{
        id: string;
        description: string | null;
        name: string;
        scenarioId: string;
    }>;
}
