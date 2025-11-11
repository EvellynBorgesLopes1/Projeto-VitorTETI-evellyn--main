import { PrismaService } from "../../../shared/databases/prisma.database";
export declare class DeleteOptionRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    delete(id: string): Promise<{
        name: string;
        description: string | null;
        id: string;
        scenarioId: string;
    }>;
}
