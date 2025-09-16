import { Injectable } from "@nestjs/common";
import { PrismaService } from '../../../shared/databases/prisma.database';
import { CreateScenarioDto } from "../dto/create-scenario.dto";
//consulta para criar um novo cenário no banco de dados    
@Injectable()
export class CreateScenarioRepository {
    constructor(private readonly prisma: PrismaService) {}
// pega todos tipos de dados que a gente prescisa criar
    async create(data: CreateScenarioDto){
        const Scenario = await this.prisma.scenario.create({
            // a variavel data recebe os dados do dto, amarzernou a consulta do banco
            data,
        });
        return Scenario;
    }
}
