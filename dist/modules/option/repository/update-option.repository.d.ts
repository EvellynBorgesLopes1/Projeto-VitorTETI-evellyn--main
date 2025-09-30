import { PrismaService } from '../../../shared/databases/prisma.database';
import { UpdateOptionDto } from 'src/modules/option/dto/update-option.dto';
export declare class UpdateOptionRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    UpadateOption(id: string, data: UpdateOptionDto): Promise<void>;
}
