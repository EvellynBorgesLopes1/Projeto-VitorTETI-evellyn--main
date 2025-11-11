import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase, ListScenarioUseCase, DeleteScenarioUseCase, FindOneScenarioUseCase, UpdateScenarioUseCase } from './use-cases';
export declare class ScenarioService {
    private readonly createScenarioUseCase;
    private readonly listScenarioUseCase;
    private readonly findoneScenarioUseCase;
    private readonly deleteScenarioUseCase;
    private readonly updateScenarioUseCase;
    constructor(createScenarioUseCase: CreateScenarioUseCase, listScenarioUseCase: ListScenarioUseCase, findoneScenarioUseCase: FindOneScenarioUseCase, deleteScenarioUseCase: DeleteScenarioUseCase, updateScenarioUseCase: UpdateScenarioUseCase);
    create(data: CreateScenarioDto): Promise<{
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
    update(id: string, data: UpdateScenarioDto): Promise<{
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
