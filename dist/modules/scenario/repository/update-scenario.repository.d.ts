import { PrismaService } from 'src/shared/databases/prisma.database';
import { UpdateScenarioDto } from './../dto/update-scenario.dto';
export declare class UpdateScenarioRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    updateScenario(id: string, data: UpdateScenarioDto): Promise<{
        title: string;
        description: string | null;
        id: string;
        createdAt: Date;
    }>;
}
