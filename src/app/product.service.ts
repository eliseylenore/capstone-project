import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Cart } from './cart.model';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import * as Rx from 'rxjs';
import { Observable } from 'rxjs/Observable';
import * as Firebase from "firebase";

@Injectable()
export class ProductService {
  products: FirebaseListObservable<any[]>;
  items: FirebaseListObservable<any[]>;
  carts: FirebaseListObservable<any[]>;
  chosenCartItems: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.products = database.list('products');
    this.items = database.list('items');
    this.carts = database.list('carts');
  }

  getProducts() {
    return this.products;
  }

  // addItem(newItem: Product) {
  //   this.items.push(newItem);
  // }
  //
  // addCart(newCart: Cart) {
  //   this.carts.push(newCart);
  // }

  addItemToCart(newItem, userId) {
    var cartId;
    var thisCart: FirebaseListObservable<any> = this.database.list('/allCarts/' + userId + '/currentCart');
    var cartItems: FirebaseListObservable<any> = this.database.list('/allCarts/' + userId + '/currentCart/items');
    cartItems.push(newItem);
  }


  getProductById(productId: string) {
    return this.database.object('products/' + productId);
  }
}
