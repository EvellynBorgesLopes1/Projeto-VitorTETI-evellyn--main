import { Logger, Module } from '@nestjs/common';
import { ScenarioService } from './scenario.service';
import { ScenarioController } from './scenario.controller';
import * as UsesCases from './use-cases';
import * as Repositories from './repository';
import { SharedModule } from 'src/shared/shared.module';

const useCases = Object.values(UsesCases);
const repositories = Object.values(Repositories);


@Module({
  imports: [SharedModule],
  controllers: [ScenarioController],
  providers: [ScenarioService, ...useCases, ...repositories, Logger],
})
export class ScenarioModule {}
