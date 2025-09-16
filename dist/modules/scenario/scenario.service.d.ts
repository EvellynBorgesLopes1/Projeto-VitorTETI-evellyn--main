import { CreateScenarioUseCase } from './use-cases/create.scenario.use-case';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
export declare class ScenarioService {
    private readonly CreateScenarioUseCase;
    constructor(CreateScenarioUseCase: CreateScenarioUseCase);
    create(data: CreateScenarioDto): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateScenarioDto: UpdateScenarioDto): string;
    remove(id: number): string;
}
