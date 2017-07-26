import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Location } from '@angular/common';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [ ProductService, AuthenticationService ]
})

export class ProductDetailComponent implements OnInit {
  productId: string;
  productToDisplay;
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(
    public authService: AuthenticationService,
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService
  ) {
    this.authService.user.subscribe(user => {
      console.log(user.uid);
      if(user === null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.productId = urlParameters['id'];
    });
    this.productToDisplay = this.productService.getProductById(this.productId);
  }

}
