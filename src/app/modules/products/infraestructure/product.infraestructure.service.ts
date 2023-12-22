import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../domain/product.interface';
import { IProductRepository } from '../domain/product.repository';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductInfraestructureService implements IProductRepository {
  constructor(private readonly http: HttpClient) {}

  findByPageByCriteria(
    criteria: string,
    page: number,
    limit: number
  ): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(environment.HOST + '/products');
  }
}
