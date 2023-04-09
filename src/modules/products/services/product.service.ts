import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseMessages } from '../../../shared/constants/responseMessages';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepo.find();
  }

  findOne(id: number) {
    const product = this.productRepo.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(ResponseMessages.PRODUCT_NOT_FOUND);
    }

    return product;
  }

  // create(payload: CreateProductDto) {
  //   this.counterId = this.counterId + 1;
  //   const newProduct: Product = {
  //     id: this.counterId,
  //     ...payload,
  //   };
  //   this.product.push(newProduct);
  //   return {
  //     message: ResponseMessages.PRODUCT_CREATED,
  //     payload,
  //   };
  // }

  // update(id: number, payload: UpdateProductDto) {
  //   const product = this.findOne(id);
  //   if (!product) {
  //     throw new NotFoundException(ResponseMessages.PRODUCT_NOT_FOUND);
  //   }
  //   const index = this.product.findIndex((item) => item.id === id);
  //   this.product[index] = {
  //     ...product,
  //     ...payload,
  //   };
  //   return {
  //     message: ResponseMessages.PRODUCT_UPDATED,
  //     payload,
  //   };
  // }

  // delete(id: number) {
  //   const index = this.product.findIndex((item) => item.id === id);
  //   if (index === -1) {
  //     throw new NotFoundException(ResponseMessages.PRODUCT_NOT_FOUND);
  //   }
  //   this.product.splice(index, 1);
  //   return {
  //     message: ResponseMessages.PRODUCT_DELETED,
  //   };
  // }
}
