import { TestBed } from '@angular/core/testing';

import { ProductInfraestructureService } from '../../../../../src/app/modules/products/infraestructure/product.infraestructure.service';
import { provideHttpClient } from '@angular/common/http';

describe('ProductInfraestructureService', () => {
  let service: ProductInfraestructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(ProductInfraestructureService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
