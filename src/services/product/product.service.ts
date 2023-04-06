import { Injectable, NotFoundException } from '@nestjs/common';
import { ResponseMessages } from '../../constants/responseMessages';
import { Product } from '../../models/product';

@Injectable()
export class ProductService {
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

  create(payload: Product) {
    this.product.push(payload);
    return {
      message: ResponseMessages.PRODUCT_CREATED,
      payload,
    };
  }

  update(id: number, payload: Product) {
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
