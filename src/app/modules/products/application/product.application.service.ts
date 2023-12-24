import { Inject, Injectable } from '@angular/core';
import { IProductRepository } from '../domain/product.repository';
import { Observable } from 'rxjs';
import { IProduct } from '../domain/product.interface';
import { ProductInfraestructureService } from '../infraestructure/product.infraestructure.service';

@Injectable({
  providedIn: 'root',
})
export class ProductApplicationService implements IProductRepository {
  constructor(
    @Inject(ProductInfraestructureService)
    private readonly productRepository: IProductRepository
  ) {}

  create(product: IProduct): Observable<IProduct> {
    return this.productRepository.create(product);
  }

  update(product: IProduct): Observable<IProduct> {
    return this.productRepository.update(product);
  }

  delete(id: string): Observable<string> {
    return this.productRepository.delete(id);
  }

  getAll(page: number, limit: number): Observable<IProduct[]> {
    return this.productRepository.getAll(page, limit);
  }

  findById(id: string): Observable<IProduct | undefined> {
    return this.productRepository.findById(id);
  }

  verifyId(id: string): Observable<string> {
    return this.productRepository.verifyId(id);
  }
}
