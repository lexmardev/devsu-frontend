import { Observable } from 'rxjs';
import { IProduct } from './product.interface';

export interface IProductRepository {
  create(product: IProduct): Observable<IProduct>;
  update(product: IProduct): Observable<IProduct>;
  delete(id: string): Observable<string>;
  getAll(page: number, limit: number): Observable<IProduct[]>;
  findById(id: string): Observable<IProduct | undefined>;
  verifyId(id: string): Observable<string>;
}
