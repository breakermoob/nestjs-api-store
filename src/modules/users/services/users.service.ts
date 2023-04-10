import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { ConfigService, ConfigType } from '@nestjs/config';
import { Repository } from 'typeorm';
import config from '../../../config';
import { ProductService } from '../../products/services/product.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { User } from '../entities/user.entity';
import { CustomersService } from './customers.service';

@Injectable()
export class UsersService {
  constructor(
    private productSvc: ProductService,
    private customerSvc: CustomersService,
    private configNestJsSvc: ConfigService,
    @Inject(config.KEY) private configSvc: ConfigType<typeof config>,
    @Inject(User) private userRepo: Repository<User>,
  ) {}

  findAll() {
    const apiKey = this.configNestJsSvc.get('API_KEY'); // Option 1: Using ConfigService
    const dbName = this.configSvc.postgres.database; // Option 2: Using Inject with types
    console.log(apiKey, dbName);
    return this.userRepo.find();
  }

  findOne(id: number) {
    const user = this.userRepo.findOne(id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async create(data: CreateUserDto) {
    const newUser = this.userRepo.create(data);
    if (data.customerId) {
      const customer = await this.customerSvc.findOne(data.customerId);
      newUser.customer = customer;
    }
    return this.userRepo.save(newUser);
  }

  async update(id: number, changes: UpdateUserDto) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    this.userRepo.merge(user, changes);
    return this.userRepo.save(user);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }

  async getOrderByUser(id: number) {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: await this.productSvc.findAll(),
    };
  }
}
