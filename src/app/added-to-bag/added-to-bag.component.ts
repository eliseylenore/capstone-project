import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../product.model';
import { Cart } from './../cart.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-added-to-bag',
  templateUrl: './added-to-bag.component.html',
  styleUrls: ['./added-to-bag.component.scss'],
  providers: [ProductService]
})


export class AddedToBagComponent {
  constructor(private productService: ProductService) { }

  @Input() productToDisplay = Product;
  showAlert: boolean = false;

  newItem(
    name: string,
    gender: string,
    clothing: string,
    price: number,
    size: string,
    color: string,
    description: string,
    imageUrl: string) {
      var newItem = new Product(name, gender, clothing, price, size, color, description, imageUrl);
      var newCart = new Cart([newItem]);
      console.log("total price: $" + newCart.totalPrice);
      this.productService.addItemToCart(newItem);
      //this.productService.addCart(newCart);
  }

  // addToBag() {
  //   this.showAlert=true;
  // }
  //
  // removeFromBag() {
  //   this.showAlert=false;
  // }


}
