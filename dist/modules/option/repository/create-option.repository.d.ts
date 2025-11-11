import { PrismaService } from "../../../shared/databases/prisma.database";
import { CreateOptionDto } from "../dto/create-option.dto";
export declare class CreateOptionRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateOptionDto): Promise<{
        name: string;
        description: string | null;
        id: string;
        scenarioId: string;
    }>;
}
