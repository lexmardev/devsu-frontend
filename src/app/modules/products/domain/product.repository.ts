import { Observable } from 'rxjs';
import { IProduct } from './product.interface';

export interface IProductRepository {
  findByPageByCriteria(
    criteria: string,
    page: number,
    limit: number
  ): Observable<IProduct[]>;
}
