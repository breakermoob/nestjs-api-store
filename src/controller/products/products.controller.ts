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

@Controller('products')
export class ProductsController {
  @Get() getProducts(
    @Query() limite: number,
    @Query() offset: number,
    @Query() brand: string,
  ) {
    return `Products: limite: ${limite}, offset: ${offset}, brand: ${brand}`;
  }

  @Get('filter') getProductsFilter(@Res() response: Response) {
    response.status(202).send('filter'); // is a best way to use HttpCode and HttpStatus from @nestjs/common
    return `Products filter`;
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id') id: string) {
    return `Product: ${id}`;
  }

  @Post() create(@Body() payload: any) {
    return {
      ...payload,
      message: 'action create',
    };
  }

  @Put(':id') update(@Param('id') id: string, @Body() payload: any) {
    return {
      id,
      ...payload,
      message: 'action create',
    };
  }

  @Delete(':id') delete(@Param('id') id: string) {
    return `Product: ${id} has been deleted`;
  }
}
