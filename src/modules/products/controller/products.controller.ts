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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { ParseIntPipe } from '../../../shared/pipes/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductService } from './../services/product.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productSvc: ProductService) {}

  @Get()
  @ApiOperation({ summary: 'List of products' }) // set description for swagger
  getProducts(
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
  getProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productSvc.findOne(+id);
  }

  @Post() create(@Body() payload: CreateProductDto) {
    return this.productSvc.create(payload);
  }

  @Put(':id') update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productSvc.update(+id, payload);
  }

  @Delete(':id') delete(@Param('id', ParseIntPipe) id: number) {
    return this.productSvc.delete(+id);
  }
}
