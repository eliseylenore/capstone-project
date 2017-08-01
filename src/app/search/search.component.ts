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
    this.productService.getSearchedProducts(this.startAt, this.endAt)
      .subscribe(products => this.products = products)
  }

  search($event) {
      let q = $event.target.value
      this.startAt.next(q)
      this.endAt.next(q+"\uf8ff")
  }

}
