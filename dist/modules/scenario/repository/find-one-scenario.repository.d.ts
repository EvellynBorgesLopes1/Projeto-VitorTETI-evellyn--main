import { PrismaService } from "src/shared/databases/prisma.database";
export declare class FindOneScenarioRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findOne(id: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
    }>;
}
