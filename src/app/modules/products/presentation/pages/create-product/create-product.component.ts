import { Component } from '@angular/core';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { IProduct } from '../../../domain/product.interface';
import { ProductApplicationService } from '../../../application/product.application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ProductFormComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})
export class CreateProductComponent {
  isIdCreated: boolean;

  constructor(
    private readonly productService: ProductApplicationService,
    private readonly router: Router
  ) {
    this.isIdCreated = false;
  }

  onSubmit(product: IProduct) {
    if (!this.isIdCreated) {
      this.productService.create(product).subscribe({
        next: () => {
          alert('Producto creado exitosamente');
          this.router.navigate(['/']);
        },
        error: () => {
          alert('No se pudo crear el producto');
        },
      });
    }
  }

  onIdVerification(id: string) {
    this.productService.verifyId(id).subscribe({
      next: (response) => {
        if (response === 'true') {
          this.isIdCreated = true;
          return;
        }

        this.isIdCreated = false;
      },
    });
  }
}
