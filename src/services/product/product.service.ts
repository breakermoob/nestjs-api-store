import { Injectable } from '@nestjs/common';
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
    if (product) {
      const index = this.product.findIndex((item) => item.id === id);
      this.product[index] = payload;
      return {
        message: ResponseMessages.PRODUCT_UPDATED,
        payload,
      };
    }
    return {
      message: ResponseMessages.PRODUCT_NOT_FOUND,
      payload,
    };
  }
}
