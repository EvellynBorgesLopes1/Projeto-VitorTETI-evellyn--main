import { PrismaService } from "../../../shared/databases/prisma.database";
import { UpdateOptionDto } from "../dto/update-option.dto";
export declare class UpdateOptionRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    update(id: string, data: UpdateOptionDto): Promise<{
        name: string;
        description: string | null;
        id: string;
        scenarioId: string;
    }>;
}
