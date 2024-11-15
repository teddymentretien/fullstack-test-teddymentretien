import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { dataBaseConfig } from './database/database.config'
import { SequelizeModule } from '@nestjs/sequelize'

@Module({
  imports: [SequelizeModule.forRoot(dataBaseConfig)],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
