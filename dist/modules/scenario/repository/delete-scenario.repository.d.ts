import { PrismaService } from "../../../shared/databases/prisma.database";
export declare class DeleteScenarioRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    delete(id: string): Promise<{
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    }>;
}
