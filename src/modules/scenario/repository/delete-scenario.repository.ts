import { Scenario } from './../../../../node_modules/.prisma/client/index.d';
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class DeleteScenarioRepository {
    constructor(private readonly prisma: PrismaService) {}

    async deleteScenario(id:string) {
        const Scenario = await this.prisma.scenario.delete({
            where: { id },
        });
        return Scenario;
    }
}