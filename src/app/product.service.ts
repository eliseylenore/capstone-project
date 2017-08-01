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

  getSearchedProducts(start, end): FirebaseListObservable<any> {
    return this.database.list('/products', {
      query: {
        orderByChild: 'name',
        limitToFirst: 10,
        startAt: start,
        endAt: end
      }
    });
  }

  getProducts() {
    return this.products;
  }

  getCartItem(productKey, userId) {
    let cartItem;
    let cartItems = this.database.list('/allCarts/'+ userId + '/currentCart/items');
    let thisItem = cartItems.subscribe(
      items => {
        items.forEach(function(item) {
          if (item.id == productKey) {
            cartItem = item;
          }
      });
    });
    return cartItem;
  }

  getItemById(itemId: string, userId: string){
    return this.database.object('/allCarts/' + userId + '/currentCart/items/' + itemId);
  }


  editItem(localUpdatedItem, userId) {
    var itemInFirebase = this.getItemById(localUpdatedItem.$key, userId);
    itemInFirebase.update({
      quantity: localUpdatedItem.quantity,
      size: localUpdatedItem.size
    });
  }

  deleteItem(itemToDelete, userId) {
    var itemInFirebase = this.getItemById(itemToDelete.$key, userId);
    itemInFirebase.remove();
  }

  addItemToCart(newItem, userId) {
    var thisCart: FirebaseListObservable<any> = this.database.list('/allCarts/' + userId + '/currentCart');
    var cartItems: FirebaseListObservable<any> = this.database.list('/allCarts/' + userId + '/currentCart/items');
    cartItems.push(newItem);
  }

  getCurrentCart(userId) {
    var currentCart: FirebaseListObservable<any> = this.database.list('/allCarts/' + userId + '/currentCart/items');
    return currentCart;
  }

  getItemsInCart(userId) {
    var cartItems: FirebaseListObservable<any> = this.database.list('/allCarts/' + userId + '/currentCart/items');
    return cartItems;
  }

  getProductById(productId: string) {
    return this.database.object('products/' + productId);
  }

  moveCurrentCart(userId) {
    var currentCart = this.getCurrentCart(userId);
    var pastCarts: FirebaseListObservable<any> = this.database.list('/allCarts/' + userId + '/pastCarts');
    var cartToPush;
    currentCart.subscribe(cart => {
      console.log("cart: " + JSON.stringify(cart));
      // var totalCost;
      // cart.items.forEach(function(item) {
      //   totalCost += item.cost;
      // })
      // var cartToPush = {id: cart.id, items: cart.items, totalCost: totalCost }
    })

    pastCarts.push(cartToPush);
    currentCart.remove();
  }
}
