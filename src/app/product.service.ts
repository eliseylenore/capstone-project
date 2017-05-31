import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Cart } from './cart.model';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {   } from 'angularfire2/database';

@Injectable()
export class ProductService {
  products: FirebaseListObservable<any[]>;
  items: FirebaseListObservable<any[]>;
  carts: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFireDatabaseModule, private database: AngularFireDatabase) {
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

  addItemToCart() {
    let cartReference = this.database.object('/carts/');
    cartReference.on("value", function(snapshot) {
      console.log(snapshot.val());
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }

  getProductById(productId: string) {
    return this.database.object('products/' + productId);
  }
}
