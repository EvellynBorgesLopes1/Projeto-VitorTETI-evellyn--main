import { PrismaService } from "../../../shared/databases/prisma.database";
import { CreateScenarioDto } from "../dto/create-scenario.dto";
export declare class CreateScenarioRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateScenarioDto): Promise<{
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    }>;
}
