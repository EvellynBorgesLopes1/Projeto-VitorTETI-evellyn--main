import { PrismaService } from "src/shared/databases/prisma.database";
export declare class DeleteOptionRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    DeleteOption(id: string): Promise<{
        id: string;
        description: string | null;
        name: string;
        scenarioId: string;
    }>;
}
