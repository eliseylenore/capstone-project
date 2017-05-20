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

  newProduct(thisProduct: Product) {
    var name = thisProduct.name;
    var gender = thisProduct.gender;
    var clothing = thisProduct.clothing;
    var price = thisProduct.price;
    var size = thisProduct.size;
    var color = thisProduct.color;
    var description = thisProduct.description;
    var imageUrl = thisProduct.imageUrl;
    var newProductToAdd: Product = new Product(name, gender, clothing, price, size, color, description, imageUrl);
    this.productService.addProduct(newProductToAdd);
  }

  addToBag() {
    this.showAlert=true;
  }

  removeFromBag() {
    this.showAlert=false;
  }


}
