import { Injectable } from '@angular/core';
import { Product } from './product.model';
// import { PRODUCTS } from './mock-products';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProductService {
  products: FirebaseListObservable<any[]>;
  items: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.products = database.list('products');
    this.items = database.list('items');
  }

  getProducts() {
    return this.products;
  }

  addItem(newItem: Product) {
    this.items.push(newItem);
  }

  getProductById(productId: string) {
    return this.database.object('products/' + productId);
  }
}
