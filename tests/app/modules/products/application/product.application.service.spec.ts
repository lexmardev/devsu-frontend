import { TestBed } from '@angular/core/testing';

import { ProductApplicationService } from '../../../../../src/app/modules/products/application/product.application.service';
import { provideHttpClient } from '@angular/common/http';

describe('ProductApplicationService', () => {
  let service: ProductApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });

    service = TestBed.inject(ProductApplicationService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
