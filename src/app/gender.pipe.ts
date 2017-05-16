import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';

@Pipe({
  name: "gender",
  pure: false
})

export class GenderPipe implements PipeTransform {

  transform (input: Product[], desiredGender) {
    var output: Product[] = [];
    if(desiredGender === "female") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].gender === "Female") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredGender === "male") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].gender === "Male") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
