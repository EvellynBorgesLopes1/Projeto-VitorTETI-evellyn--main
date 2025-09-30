import { PrismaService } from "src/shared/databases/prisma.database";
export declare class FindOneOptionRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findOne(id: string): Promise<{
        id: string;
        description: string | null;
        name: string;
        scenarioId: string;
    }>;
}
