import { PrismaService } from '../../../shared/databases/prisma.database';
import { CreateScenarioDto } from "../dto/create-scenario.dto";
export declare class CreateScenarioRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateScenarioDto): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
    }>;
}
