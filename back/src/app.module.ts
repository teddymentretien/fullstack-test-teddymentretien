import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { dataBaseConfig } from './database/database.config'
import { SequelizeModule } from '@nestjs/sequelize'
import { ProductsModule } from './products/products.module';

@Module({
  imports: [SequelizeModule.forRoot(dataBaseConfig), ProductsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
