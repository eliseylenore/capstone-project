import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../product.model';
import { Cart } from './../cart.model';
import { ProductService } from '../product.service';
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-added-to-bag',
  templateUrl: './added-to-bag.component.html',
  styleUrls: ['./added-to-bag.component.scss'],
  providers: [ProductService, AuthenticationService]
})


export class AddedToBagComponent {
  userId;
  constructor(
    public authService: AuthenticationService,
    private productService: ProductService) {
      this.authService.user.subscribe(user => {
        if(user === null) {
          this.userId = null;
        } else {
          this.userId = user.uid;
        }
      })
    }

  @Input() productToDisplay = Product;
  showAlert: boolean = false;

  newItem(
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
      //var newCart = new Cart([newItem]);
      //console.log("total price: $" + newCart.totalPrice);
      this.productService.addItemToCart(newItem, this.userId);
      //this.productService.addCart(newCart);
  }
}
