import { PrismaService } from "./databases/prisma.database";
import { Global, Module } from "@nestjs/common";
import { Logger } from "@nestjs/common";

@Global()
@Module({
    imports: [],
    providers: [PrismaService, Logger], 
    exports: [PrismaService],
})
export class SharedModule {}
