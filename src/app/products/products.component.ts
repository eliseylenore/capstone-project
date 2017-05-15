import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: FirebaseListObservable<any[]>;

  ngOnInit() {
    
  }
}
