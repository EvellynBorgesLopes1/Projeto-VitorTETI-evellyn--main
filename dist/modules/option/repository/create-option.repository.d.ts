import { PrismaService } from "src/shared/databases/prisma.database";
import { CreateOptionDto } from "../dto/create-option.dto";
export declare class CreateOptionRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateOptionDto): Promise<{
        id: string;
        description: string | null;
        name: string;
        scenarioId: string;
    }>;
}
