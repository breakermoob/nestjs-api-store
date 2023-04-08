import { Module } from '@nestjs/common';
import { CategoriesController } from './controller/categories.controller';
import { ProductsController } from './controller/products.controller';
import { ProductService } from './services/product.service';

@Module({
  controllers: [ProductsController, CategoriesController],
  providers: [ProductService],
})
export class ProductsModule {}
