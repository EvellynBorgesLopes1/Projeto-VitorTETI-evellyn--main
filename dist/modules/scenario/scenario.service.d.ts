import { ListScenarioUseCase } from './use-cases/list-sceario.use-case';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase, UpdateScenarioUseCase, DeleteScenarioUseCase, FindOneScenarioUseCase } from './use-cases';
export declare class ScenarioService {
    private readonly createScenarioUseCase;
    private readonly listScenarioUseCase;
    private readonly updateScenarioUseCase;
    private readonly DeleteScenarioUseCase;
    private readonly findOneScenarioUseCase;
    constructor(createScenarioUseCase: CreateScenarioUseCase, listScenarioUseCase: ListScenarioUseCase, updateScenarioUseCase: UpdateScenarioUseCase, DeleteScenarioUseCase: DeleteScenarioUseCase, findOneScenarioUseCase: FindOneScenarioUseCase);
    create(data: CreateScenarioDto): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
    }>;
    update(id: string, data: UpdateScenarioDto): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
    }>;
}
