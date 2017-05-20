import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../product.model';

@Component({
  selector: 'app-added-to-bag',
  templateUrl: './added-to-bag.component.html',
  styleUrls: ['./added-to-bag.component.scss']
})


export class AddedToBagComponent implements OnInit {
  @Input() productToDisplay = Product;
  showAlert: boolean = false;

  newProduct(product: Product) {
    var newProductToAdd: Product = new Product(product.name, product.gender, product.clothing, product.price, product.size, product.color, product.description, product.imageUrl);
  }
  
  addToBag() {
    this.showAlert=true;
  }

  removeFromBag() {
    this.showAlert=false;
  }
  constructor() { }

  ngOnInit() {
  }

}
