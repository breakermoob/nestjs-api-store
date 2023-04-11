import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandsController } from './controller/brands.controller';
import { CategoriesController } from './controller/categories.controller';
import { ProductsController } from './controller/products.controller';
import { Brand } from './entities/brand.entity';
import { Product } from './entities/product.entity';
import { BrandsService } from './services/brands.service';
import { ProductService } from './services/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Brand])],
  controllers: [ProductsController, CategoriesController, BrandsController],
  providers: [ProductService, BrandsService],
  exports: [ProductService],
})
export class ProductsModule {}
