import {Component} from "@angular/core";
import {ProductService} from './product.service';
import {MoneyService} from './money.service';

@Component({
  selector: 'products',
  template:
      `<h2>Products</h2>
  <div *ngFor="let product of products">
    <product [data]="product"></product>
  </div>
  `,
  providers: [ProductService, MoneyService]
})

export class ProductsComponent {
  products;
  monies;

  constructor(productService: ProductService, moneyService: MoneyService) {
    this.products = productService.getProducts();
    this.monies = moneyService.getMoney();
  }

// <div *ngFor="let money of monies">
// {{money | currency:'USD':'symbol'}}
// </div>
}
