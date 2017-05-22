import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../product.model';
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
      console.log("chosen product: " + name);
      var newItem = new Product(name, gender, clothing, price, size, color, description, imageUrl);
      this.productService.addItem(newItem);
  }

  addToBag() {
    this.showAlert=true;
  }

  removeFromBag() {
    this.showAlert=false;
  }


}
