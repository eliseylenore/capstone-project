import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-added-to-bag',
  templateUrl: './added-to-bag.component.html',
  styleUrls: ['./added-to-bag.component.scss']
})
export class AddedToBagComponent implements OnInit {
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
