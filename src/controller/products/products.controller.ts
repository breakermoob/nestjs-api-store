import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from '../../services/product/product.service';

@Controller('products')
export class ProductsController {
  constructor(private productSvc: ProductService) {}

  @Get() getProducts(
    @Query() limite: number,
    @Query() offset: number,
    @Query() brand: string,
  ) {
    return this.productSvc.findAll();
  }

  @Get('filter') getProductsFilter(@Res() response: Response) {
    response.status(202).send('filter'); // is a best way to use HttpCode and HttpStatus from @nestjs/common
    return `Products filter`;
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id') id: string) {
    return this.productSvc.findOne(+id);
  }

  @Post() create(@Body() payload: any) {
    return this.productSvc.create(payload);
  }

  @Put(':id') update(@Param('id') id: string, @Body() payload: any) {
    return this.productSvc.update(+id, payload);
  }

  @Delete(':id') delete(@Param('id') id: string) {
    return this.productSvc.delete(+id);
  }
}
