import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Name of the product' })
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Description of the product' })
  readonly description: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Price of the product' })
  readonly price: number;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Stock of the product' })
  readonly stock: number;
  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({ description: 'Image of the product' })
  readonly image: string;
}

// export class UpdateProductDto {
//   @IsString()
//   readonly name?: string;
//   @IsString()
//   readonly description?: string;
//   @IsNumber()
//   readonly price?: number;
//   @IsNumber()
//   readonly stock?: number;
//   @IsUrl()
//   readonly image?: string;
// }

export class UpdateProductDto extends PartialType(CreateProductDto) {}
