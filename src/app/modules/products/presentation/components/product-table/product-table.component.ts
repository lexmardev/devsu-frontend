import { Component, Input } from '@angular/core';
import { IProduct } from '../../../domain/product.interface';
import { FormatDatePipe } from '../../../../../lib/pipes/format-date.pipe';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { Router, RouterLink } from '@angular/router';
import { ProductApplicationService } from '../../../application/product.application.service';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [FormatDatePipe, DropdownMenuComponent, RouterLink],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css',
})
export class ProductTableComponent {
  @Input() products: IProduct[];

  constructor(
    private readonly router: Router,
    private readonly productService: ProductApplicationService
  ) {
    this.products = [];
  }

  navToUpdate(id: string) {
    this.router.navigate(['/update-product', id]);
  }

  onDelete(product: IProduct) {
    const response = confirm(
      `Esta seguro que desea eliminar el producto ${product.name}`
    );

    if (response) {
      this.productService.delete(product.id).subscribe({
        next: () => {
          alert('Eliminado correctamente');
          location.reload();
        },
        error: () => {
          alert('No se pudo eliminar el producto');
        },
      });
    }
  }
}
