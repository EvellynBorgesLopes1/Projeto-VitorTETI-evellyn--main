import { OptionService } from './option.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
export declare class OptionController {
    private readonly optionService;
    constructor(optionService: OptionService);
    create(createOptionDto: CreateOptionDto): Promise<{
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
    update(id: string, updateOptionDto: UpdateOptionDto): Promise<void>;
    remove(id: string): Promise<{
        id: string;
        description: string | null;
        name: string;
        scenarioId: string;
    }>;
}
