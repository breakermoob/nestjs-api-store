import { Injectable, NotFoundException } from '@nestjs/common';
import { ResponseMessages } from '../../../shared/constants/responseMessages';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
  private counterId = 1;
  private product: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      stock: 100,
      image: '',
    },
  ];

  findAll(): Product[] {
    return this.product;
  }

  findOne(id: number): Product {
    return this.product.find((item) => item.id === id);
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct: Product = {
      id: this.counterId,
      ...payload,
    };
    this.product.push(newProduct);
    return {
      message: ResponseMessages.PRODUCT_CREATED,
      payload,
    };
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (!product) {
      throw new NotFoundException(ResponseMessages.PRODUCT_NOT_FOUND);
    }
    const index = this.product.findIndex((item) => item.id === id);
    this.product[index] = {
      ...product,
      ...payload,
    };
    return {
      message: ResponseMessages.PRODUCT_UPDATED,
      payload,
    };
  }

  delete(id: number) {
    const index = this.product.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(ResponseMessages.PRODUCT_NOT_FOUND);
    }
    this.product.splice(index, 1);
    return {
      message: ResponseMessages.PRODUCT_DELETED,
    };
  }
}
