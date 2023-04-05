import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get() getProducts(
    @Query() limite: number,
    @Query() offset: number,
    @Query() brand: string,
  ) {
    return `Products: limite: ${limite}, offset: ${offset}, brand: ${brand}`;
  }

  @Get('filter') getProductsFilter() {
    return `Products filter`;
  }

  @Get(':id') getProduct(@Param('id') id: string) {
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
