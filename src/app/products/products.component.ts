import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ ProductService ]
})


export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) {}
  products: FirebaseListObservable<any[]>;

  filterBySize: string = "allSizes";
  filterByGender: string = "allGenders";
  filterByColor: string = "allColors";
  filterByPrice: string = "allPrices";
  filterByClothing: string ="allClothing";

  onSizeChange(optionFromSizeMenu) {
    this.filterBySize = optionFromSizeMenu;
  }
  onGenderChange(optionFromGenderMenu) {
    this.filterByGender = optionFromGenderMenu;
  }
  onColorChange(optionFromColorMenu) {
    this.filterByColor = optionFromColorMenu;
  }
  onPriceChange(optionFromPriceMenu) {
    this.filterByPrice = optionFromPriceMenu;
  }
  onClothingChange(optionFromClothingMenu) {
    this.filterByClothing = optionFromClothingMenu;
  }
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  goToDetailPage(clickedProduct) {
    this.router.navigate(['products', clickedProduct.$key]);
  };
}
