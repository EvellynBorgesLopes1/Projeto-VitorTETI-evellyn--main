import { SharedModule } from './../../shared/shared.module';
import { Logger, Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionController } from './option.controller';
import * as UseCases from './use-case';
import * as Repositories from './repository';
export { SharedModule } from './../../shared/shared.module';


const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  controllers: [OptionController],
  providers: [OptionService, Logger, ...useCases, ...repositories],
})
export class OptionModule {}
