import { Module } from "@nestjs/common";
import { PersonController } from "./person.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonModel } from "./person.model";

@Module({
    imports: [TypeOrmModule.forFeature([PersonModel])],
    controllers: [PersonController],
})
export class PersonModule {}