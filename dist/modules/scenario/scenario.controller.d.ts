import { ScenarioService } from './scenario.service';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
export declare class ScenarioController {
    private readonly scenarioService;
    constructor(scenarioService: ScenarioService);
    create(createScenarioDto: CreateScenarioDto): Promise<{
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    }>;
    findAll(): Promise<({
        options: {
            name: string;
            description: string | null;
            id: string;
            scenarioId: string;
        }[];
    } & {
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    } | import("@nestjs/common").NotFoundException>;
    update(id: string, updateScenarioDto: UpdateScenarioDto): Promise<{
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    }>;
}
