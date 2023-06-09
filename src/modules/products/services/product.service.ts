import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseMessages } from '../../../shared/constants/responseMessages';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../entities/product.entity';
import { BrandsService } from './brands.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
    private brandSvc: BrandsService,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepo.find({ relations: ['brand'] });
  }

  async findOne(id: number) {
    const product = await this.productRepo.findOne(id, {
      relations: ['brand'],
    });
    if (!product) {
      throw new NotFoundException(ResponseMessages.PRODUCT_NOT_FOUND);
    }

    return product;
  }

  async create(payload: CreateProductDto) {
    const newProduct = this.productRepo.create(payload);
    if (payload.brandId) {
      const brand = await this.brandSvc.findOne(payload.brandId);
      newProduct.brand = brand;
    }
    return {
      message: ResponseMessages.PRODUCT_CREATED,
      product: await this.productRepo.save(newProduct),
    };
  }

  async update(id: number, payload: UpdateProductDto) {
    const product = await this.productRepo.findOne({ id });
    this.productRepo.merge(product, payload);
    return {
      message: ResponseMessages.PRODUCT_UPDATED,
      product: await this.productRepo.save(product),
    };
  }

  async delete(id: number) {
    return this.productRepo.delete(id);
  }
}
