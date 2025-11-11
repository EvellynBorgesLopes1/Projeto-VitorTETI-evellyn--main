import { PrismaService } from "../../../shared/databases/prisma.database";
export declare class FindOneScenarioRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findone(id: string): Promise<{
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    }>;
}
