import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-stripe-form',
  templateUrl: './stripe-form.component.html',
  styleUrls: ['./stripe-form.component.scss'],
})
export class StripeFormComponent {

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_013VvsWUjRzTeq5SJhzKEAUT',
      locale: 'auto',
      token: function (token: any) {
      }
    });

    document.getElementById('customButton').addEventListener('click', function(e) {
      handler.open({
        name: 'Dressed for Success',
        description: '2 widgets',
        amount: 2000,
        zipCode: 'true'
      });
      e.preventDefault();
    });

    window.addEventListener('popstate', function() {
      handler.close();
    });
  }
}
