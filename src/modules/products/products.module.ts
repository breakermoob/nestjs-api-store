import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './controller/categories.controller';
import { ProductsController } from './controller/products.controller';
import { Product } from './entities/product.entity';
import { ProductService } from './services/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController, CategoriesController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductsModule {}
