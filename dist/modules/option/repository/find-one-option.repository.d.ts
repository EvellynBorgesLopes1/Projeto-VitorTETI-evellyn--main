import { PrismaService } from "../../../shared/databases/prisma.database";
export declare class FindOneOptionRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findone(id: string): Promise<{
        name: string;
        description: string | null;
        id: string;
        scenarioId: string;
    }>;
}
