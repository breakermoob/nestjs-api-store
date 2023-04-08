import { Product } from '../../products/entities/product.entity';
import { User } from './user.entity';

export interface Order {
  date: Date;
  user: User;
  products: Product[];
}
