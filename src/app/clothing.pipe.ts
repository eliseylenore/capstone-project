import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';

@Pipe({
  name: "clothing",
  pure: false
})

export class ClothingPipe implements PipeTransform {

  transform (input: Product[], desiredClothing) {
    var output: Product[] = [];
    if(desiredClothing === "pants") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].clothing === "Pants") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredClothing === "jacket") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].clothing === "Jacket") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredClothing === "shoes") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].clothing === "Shoes") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredClothing === "outer") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].clothing === "Outers") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredClothing === "accessories") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].clothing === "Accessories") {
          output.push(input[i]);
        }
      }
      return output;
    } else { // allClothing
      return input;
    }
  }
}
