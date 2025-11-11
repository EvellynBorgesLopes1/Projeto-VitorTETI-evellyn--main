import { OptionService } from './option.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
export declare class OptionController {
    private readonly optionService;
    constructor(optionService: OptionService);
    create(createOptionDto: CreateOptionDto): Promise<{
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
    update(id: string, updateOptionDto: UpdateOptionDto): Promise<{
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
