import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Cart } from './cart.model';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import * as Rx from 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  products: FirebaseListObservable<any[]>;
  items: FirebaseListObservable<any[]>;
  carts: FirebaseListObservable<any[]>;
  chosenCartItems: FirebaseListObservable<any[]>;
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

  addItemToCart(newItem) {
    var cartId;
    let lastCart = this.database.list('/carts', {
      query: {
        limitToLast: 1
      }
    })
    //instead of subscribing, make the cart so that there is only one cart in the node.
    //all checked out carts will go to a checkedOutCarts node
    const promise = lastCart.subscribe((result) => {
      if(result[0].checkedOut) {
        console.log("already checked out")
      } else {
        cartId = result[0].$key;
        console.log('cart id: ' + cartId);
        // this.chosenCartItems = this.database.list('carts/' + this.cartId + '/items');
        // console.log('chosenCartItems ' + JSON.stringify(this.chosenCartItems));
        // this.chosenCartItems.push(newItem);

      }
    });
  }


  getProductById(productId: string) {
    return this.database.object('products/' + productId);
  }
}
