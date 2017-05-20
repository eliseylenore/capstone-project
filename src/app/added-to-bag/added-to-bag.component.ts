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
