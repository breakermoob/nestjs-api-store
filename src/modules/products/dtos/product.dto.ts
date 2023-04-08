import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;
  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;
  @IsUrl()
  @IsNotEmpty()
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
