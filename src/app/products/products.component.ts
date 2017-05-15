import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    new Product("Super Duper Pantelones", "Male", "Pants", 70, "Medium", "Blue", 100, "These are great for wearing around an office", "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjo5Yii8fLTAhUN5WMKHQsZC1MQjRwIBw&url=http%3A%2F%2Fwww.patagonia.com%2Fshop%2Fmens-pants&psig=AFQjCNF2UNKWZOYePa6N4O0TzOs_wcMnPg&ust=1494971571321280" ,1),
    new Product("Fancy Blazer", "Female", "Jacket", 50, "Small", "Black", 60, "These are great for wearing around an office", "https://s-media-cache-ak0.pinimg.com/originals/71/11/b0/7111b0a3dbd560b8fcf87e47769ce1a5.jpg" ,2)
  ];

}
