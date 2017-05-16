import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';

@Pipe({
  name: "color",
  pure: false
})

export class ColorPipe implements PipeTransform {

  transform (input: Product[], desiredColor) {
    var output: Product[] = [];
    if(desiredColor === "black") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].color === "Black") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredColor === "white") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].color === "White") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredColor === "blue") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].color === "Blue") {
          output.push(input[i]);
        }
      }
      return output;
    } else { // allColors
      return input;
    }
  }
}
