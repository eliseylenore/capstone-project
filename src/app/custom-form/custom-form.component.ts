import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// import {Headers, Http, Response,RequestOptions} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
  // directives: [REACTIVE_FORM_DIRECTIVES]
})

export class CustomFormComponent {

  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
  message: string;

  getToken() {
    this.message = 'Loading...';

    (<any>window).Stripe.card.createToken({
      number: this.cardNumber,
      exp_month: this.expiryMonth,
      exp_year: this.expiryYear,
      cvc: this.cvc
    }, (status: number, response: any) => {
      if (status === 200) {
        this.message = 'Success! Card token ${response.card.id}.';
        console.log(this.message);
      } else {
        this.message = response.error.message;
        console.log(this.message);
      }
    });
  }

}
