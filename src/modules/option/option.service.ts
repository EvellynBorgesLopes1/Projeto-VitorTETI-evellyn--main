import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { CreateOptionUseCase, DeleteOptionUseCase, FindOneOptionUseCase, ListOptionUseCase, UpdateOptionUseCase } from './use-case';

@Injectable()
export class OptionService {
  constructor(
    private readonly deleteOptionUseCase: DeleteOptionUseCase,
    private readonly updateOptionUseCase: UpdateOptionUseCase,
    private readonly findOneOptionUseCase: FindOneOptionUseCase,
    private readonly listOptionUseCase: ListOptionUseCase,
    private readonly createOptionUseCase: CreateOptionUseCase,
  ) {}
  create(data: CreateOptionDto) {
    return this.createOptionUseCase.execute(data);
  }

  findAll() {
    return this.listOptionUseCase.execute();
  }

  findOne(id: string) {
    return this.findOneOptionUseCase.execute(id);
  }

  update(id: string, data: UpdateOptionDto) {
    return this.updateOptionUseCase.execute(id, data);
  }

  remove(id: string) {
    return this.deleteOptionUseCase.execute(id);
  }
}
