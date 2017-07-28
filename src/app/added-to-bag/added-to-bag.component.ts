import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Product } from './../product.model';
import { Cart } from './../cart.model';
import { ProductService } from '../product.service';
import { AuthenticationService } from '../authentication.service';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-added-to-bag',
  templateUrl: './added-to-bag.component.html',
  styleUrls: ['./added-to-bag.component.scss'],
  providers: [ProductService, AuthenticationService]
})

export class AddedToBagComponent implements OnInit{
  private currentCart: FirebaseListObservable<any>;
  public userId: string;
  private productId: string;
  @Input() productToDisplay = Product;
  private productToDisplayFirebase: FirebaseObjectObservable<any>
  showAlert: boolean = false;

  constructor(
    public authService: AuthenticationService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private router: Router
  ) {
    }

    ngOnInit() {
      this.route.params.forEach((urlParameters) => {
        this.productId = urlParameters['id'];
      });
      var vm = this;
      // this.productToDisplayFirebase = this.productService.getProductById(vm.productToDisplay);
      this.authService.user.subscribe(user => {
        if(user === null) {
          this.userId = "null";
          this.currentCart = this.productService.getCurrentCart(vm.userId);
          this.currentCart.subscribe(cart => {
            cart.forEach(function(item) {
              if(vm.productId==item.id) {
                vm.showAlert = true;
              }
            });
          });
        } else {
          this.userId = user.uid;
          this.currentCart = this.productService.getCurrentCart(vm.userId);
          this.currentCart.subscribe(cart => {
            cart.forEach(function(item) {
              if(vm.productId==item.id) {
                vm.showAlert = true;
              }
            });
          });
        }
      });
    }


  setData(value) {
  }
  newItem(
    quantity: string,
    id: string,
    name: string,
    gender: string,
    clothing: string,
    price: number,
    size: string,
    color: string,
    description: string,
    imageUrl: string) {
      var newItem = new Product(name, gender, clothing, price, size, color, description, imageUrl);
      newItem.id = id;
      newItem.quantity = parseInt(quantity);
      //var newCart = new Cart([newItem]);
      //console.log("total price: $" + newCart.totalPrice);
      this.productService.addItemToCart(newItem, this.userId);
      //this.productService.addCart(newCart);
      this.router.navigate(['stripe', this.userId]);
  }

  checkout() {
    this.authService.user.subscribe(user => {
      if(user === null) {
        this.userId = "null"
      } else {
        this.userId = user.uid;
      }
      this.router.navigate(['stripe', this.userId]);
    });
  }
}
