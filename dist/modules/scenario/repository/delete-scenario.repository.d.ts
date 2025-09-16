import { PrismaService } from "src/shared/databases/prisma.database";
export declare class DeleteScenarioRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    deleteScenario(id: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
    }>;
}
