import { Injectable } from '@nestjs/common';
import { CreateCriterionDto } from '../dto/create-criterion.dto';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class CreateCriterionRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateCriterionDto) {
        const criterion = await this.prisma.criterion.create({
            data,
        });
        return criterion;
    }
}