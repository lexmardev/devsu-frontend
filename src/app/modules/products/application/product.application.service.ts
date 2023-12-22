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

  findByPageByCriteria(
    criteria: string,
    page: number,
    limit: number
  ): Observable<IProduct[]> {
    return this.productRepository.findByPageByCriteria(criteria, page, limit);
  }
}
