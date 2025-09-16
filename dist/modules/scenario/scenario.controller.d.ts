import { ScenarioService } from './scenario.service';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
export declare class ScenarioController {
    private readonly scenarioService;
    constructor(scenarioService: ScenarioService);
    create(createScenarioDto: CreateScenarioDto): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateScenarioDto: UpdateScenarioDto): string;
    remove(id: string): string;
}
