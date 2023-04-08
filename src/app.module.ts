import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controller/categories/categories.controller';
import { ProductsController } from './controller/products/products.controller';
import { ProductsModule } from './modules/products/products.module';
import { ProductService } from './modules/products/services/product.service';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [ProductsModule, UsersModule],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [AppService, ProductService],
})
export class AppModule {}
