import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { CreateOptionUseCase, ListOptionUseCase, DeleteOptionUseCase, FindOneOptionUseCase, UpdateOptionUseCase } from './use-case';
export declare class OptionService {
    private readonly createOptionUseCase;
    private readonly listOptionUseCase;
    private readonly findoneOptionUseCase;
    private readonly deleteOptionUseCase;
    private readonly updateOptionUseCase;
    constructor(createOptionUseCase: CreateOptionUseCase, listOptionUseCase: ListOptionUseCase, findoneOptionUseCase: FindOneOptionUseCase, deleteOptionUseCase: DeleteOptionUseCase, updateOptionUseCase: UpdateOptionUseCase);
    create(data: CreateOptionDto): Promise<{
        name: string;
        description: string | null;
        id: string;
        scenarioId: string;
    }>;
    findAll(): Promise<({
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
    findOne(id: string): Promise<import("@nestjs/common").NotFoundException | {
        name: string;
        description: string | null;
        id: string;
        scenarioId: string;
    }>;
    update(id: string, data: UpdateOptionDto): Promise<{
        name: string;
        description: string | null;
        id: string;
        scenarioId: string;
    }>;
    remove(id: string): Promise<{
        name: string;
        description: string | null;
        id: string;
        scenarioId: string;
    }>;
}
