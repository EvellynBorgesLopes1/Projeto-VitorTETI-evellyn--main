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
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    }>;
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
