import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../domain/product.interface';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApplicationService } from '../../../application/product.application.service';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [ProductFormComponent],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css',
})
export class UpdateProductComponent implements OnInit {
  product!: IProduct;
  isLoading: boolean;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductApplicationService,
    private readonly router: Router
  ) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        const id = params['id'];

        this.productService.findById(id).subscribe({
          next: (product) => {
            if (product) {
              this.product = product;
            }

            this.isLoading = false;
          },
        });
      },
    });
  }

  onSubmit(product: IProduct) {
    this.product = product;
    this.productService.update(this.product).subscribe({
      next: () => {
        alert('Actualizado correctamente');
        this.router.navigate(['/']);
      },
    });
  }
}
