import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Product } from './products/product.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  try {
    const product = await Product.create({
      name: 'Test Product',
      description: 'Test description',
      price: 10.99,
      category: 'Test category',
      stock: 50,
    });

    console.log('Produit créé avec succès :', product);
  } catch (error) {
    console.error('Erreur lors de la création du produit :', error);
  }

  app.useGlobalFilters({
    catch(exception: any, host: any) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const status = exception.getStatus ? exception.getStatus() : 500;

      Logger.error(exception.message, exception.stack, 'GlobalErrorFilter');
      response.status(status).json({
        statusCode: status,
        message: exception.message || 'Internal server error',
      });
    },
  });

  await app.listen(3000);
}
bootstrap();
