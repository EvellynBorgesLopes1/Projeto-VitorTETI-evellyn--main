import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateOptionDto } from "../dto/update-option.dto";

@Injectable()
export class UpdateOptionRepository {
    constructor(private readonly prisma: PrismaService) {}

    async UpdateOption(id: string, data: UpdateOptionDto) {
        const option = await this.prisma.option.update({
            where: { id },
            data: {
                name: data.name,
                description: data.description,
                scenario: {
                    connect: { id: data.scenarioId },
                },
            },
        });
    }
    }