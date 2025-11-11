import { PrismaService } from "../../../shared/databases/prisma.database";
export declare class ListOptionRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(): Promise<({
        scores: {
            id: string;
            optionId: string;
            criterionId: string;
        }[];
    } & {
        name: string;
        description: string | null;
        id: string;
        scenarioId: string;
    })[]>;
}
