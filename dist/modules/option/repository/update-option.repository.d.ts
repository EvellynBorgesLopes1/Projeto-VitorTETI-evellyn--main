import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateOptionDto } from "../dto/update-option.dto";
export declare class UpdateOptionRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    UpdateOption(id: string, data: UpdateOptionDto): Promise<void>;
}
