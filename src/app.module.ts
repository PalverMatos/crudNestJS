import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModel } from 'person/person.model';
import { PersonModule } from 'person/person.module';

@Module({
  imports: [PersonModule, 
    TypeOrmModule.forRoot(
      {
        "database": "desafio-db",
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "root",
        "password": "teste",
        "synchronize": false,
        "entities": [PersonModel]
      }
    )],
})
export class AppModule {}
