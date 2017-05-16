import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';

@Pipe({
  name: "size",
  pure: false
})


export class SizePipe implements PipeTransform {

  transform(input: Product[], desiredSize){
    var output: Product[] = [];
    if(desiredSize === "smallProducts") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].size === "Small") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSize === "mediumProducts") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].size === "Medium") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSize === "largeProducts") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].size === "Large") {
          output.push(input[i]);
        }
      }
      return output;
    } else { // allProducts
      return input;
    }
  }
}
