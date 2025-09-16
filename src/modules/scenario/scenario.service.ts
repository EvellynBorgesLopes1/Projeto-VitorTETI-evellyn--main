import { ListScenarioUseCase } from './use-cases/list-sceario.use-case';
import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase,UpdateScenarioUseCase, DeleteScenarioUseCase,FindOneScenarioUseCase} from './use-cases';

@Injectable()
export class ScenarioService {
  constructor(
    private readonly createScenarioUseCase: CreateScenarioUseCase,
    private readonly listScenarioUseCase: ListScenarioUseCase,
    private readonly updateScenarioUseCase: UpdateScenarioUseCase,
    private readonly DeleteScenarioUseCase: DeleteScenarioUseCase,
    private readonly findOneScenarioUseCase: FindOneScenarioUseCase,
  ) {}

  create(data:CreateScenarioDto) {
    return  this.createScenarioUseCase.execute(data);
  }
  
  findAll() {
    return this.listScenarioUseCase.execute();
  }

  findOne(id: string) {
    return this.findOneScenarioUseCase.execute(id);
  }

  update(id: string, data: UpdateScenarioDto) {
    return this.updateScenarioUseCase.execute(id, data);
  }

  remove(id: string) {
    return this.DeleteScenarioUseCase.execute(id);
  }
}
