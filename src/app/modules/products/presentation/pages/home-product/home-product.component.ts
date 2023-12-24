import { Component, OnInit } from '@angular/core';
import { ProductTableComponent } from '../../components/product-table/product-table.component';
import { IProduct } from '../../../domain/product.interface';
import { ProductApplicationService } from '../../../application/product.application.service';

@Component({
  selector: 'app-home-product',
  standalone: true,
  imports: [ProductTableComponent],
  templateUrl: './home-product.component.html',
  styleUrl: './home-product.component.css',
})
export class HomeProductComponent implements OnInit {
  products: IProduct[];

  constructor(
    private readonly productApplicationService: ProductApplicationService
  ) {
    this.products = [];
  }

  ngOnInit(): void {
    this.productApplicationService.getAll(1, 10).subscribe({
      next: (products) => (this.products = products),
      error: (err) => {
        // TODO: Call the notification service to trigger the error modal
      },
    });
  }
}
