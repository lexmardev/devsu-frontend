import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent],
  templateUrl: './product.component.html',
})
export class ProductComponent {}
