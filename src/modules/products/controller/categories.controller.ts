import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId') getCategories(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return `Category: ${id}, Product: ${productId}`;
  }
}
