import { PrismaService } from "src/shared/databases/prisma.database";
export declare class ListOptionRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    ListOption(): Promise<({
        scenario: {
            id: string;
            title: string;
            description: string | null;
            createdAt: Date;
        };
    } & {
        id: string;
        description: string | null;
        name: string;
        scenarioId: string;
    })[]>;
}
