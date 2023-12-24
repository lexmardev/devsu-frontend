import { Injectable } from '@angular/core';
import { Observable, debounceTime, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../domain/product.interface';
import { IProductRepository } from '../domain/product.repository';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductInfraestructureService implements IProductRepository {
  readonly url: string;

  constructor(private readonly http: HttpClient) {
    this.url = environment.HOST + '/products';
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.url, product);
  }

  update(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(this.url, product);
  }

  delete(id: string): Observable<string> {
    return this.http.delete(this.url, {
      responseType: 'text',
      params: {
        id,
      },
    });
  }

  getAll(page: number, limit: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url, {
      params: {
        page,
        limit,
      },
    });
  }

  findById(id: string): Observable<IProduct | undefined> {
    return this.getAll(1, 10).pipe(
      map((products: IProduct[]) => products.find((item) => item.id === id))
    );
  }

  verifyId(id: string): Observable<string> {
    return this.http.get(this.url + '/verification', {
      responseType: 'text',
      params: { id },
    });
  }
}
