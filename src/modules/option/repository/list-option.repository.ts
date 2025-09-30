import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class ListOptionRepository {
    constructor(private readonly prisma: PrismaService) {}

    async ListOption() {
        const options = await this.prisma.option.findMany({
        include: { scenario: true },
        });
        return options;
    }
}
