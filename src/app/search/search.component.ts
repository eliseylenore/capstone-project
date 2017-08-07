import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ ProductService ]
})
export class SearchComponent implements OnInit {
  products;
  startAt = new Subject();
  endAt = new Subject();

  lastKeypress: number = 0; //event timestamp in milliseconds

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(products => this.products = products)
  }

  search(search) {
    this.products = this.productService.getSearchedProducts(search);
    console.log("products: " + JSON.stringify(this.products));
  }

}
