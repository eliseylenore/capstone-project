import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';

@Pipe({
  name: "price",
  pure: false
})

export class PricePipe implements PipeTransform {

  transform (input: Product[], desiredPrice) {
    var output: Product[] = [];
    if(desiredPrice === "under50") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].price < 50) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPrice === "under100") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].price < 100) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPrice === "over100") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].price >= 100) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
