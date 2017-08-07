import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ ProductService ]
})
export class SearchComponent implements OnInit {
  products;
  search;
  startAt = new Subject();
  endAt = new Subject();

  lastKeypress: number = 0; //event timestamp in milliseconds

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.search = urlParameters['search'];
    });
    this.products = this.productService.getSearchedProducts(this.search);
  }

  searchThis(search) {
    this.products = this.productService.getSearchedProducts(search);
    console.log("products: " + JSON.stringify(this.products));
  }

  goToDetailPage(clickedProduct) {
    this.router.navigate(['products', clickedProduct.$key]);
  };

}
