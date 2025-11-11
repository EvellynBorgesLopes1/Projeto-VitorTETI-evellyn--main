import { PrismaService } from "../../../shared/databases/prisma.database";
export declare class ListScenarioRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(): Promise<({
        options: {
            name: string;
            description: string | null;
            id: string;
            scenarioId: string;
        }[];
    } & {
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    })[]>;
}
