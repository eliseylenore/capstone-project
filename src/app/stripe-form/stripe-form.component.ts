import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { PaymentService } from '../payment.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { masterStripeConfig } from '../api-keys';
import { HttpClient } from '@angular/common/http';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-stripe-form',
  templateUrl: './stripe-form.component.html',
  styleUrls: ['./stripe-form.component.scss'],
  providers: [ ProductService, AuthenticationService, PaymentService ]
})

export class StripeFormComponent implements OnInit {
  public isLoggedIn: Boolean;
  private userId: String;
  public cartPrice: number = 0;
  public cartCost: number = 0;
  public cartTax: number = 0;
  private cartLength;
  private currentCart: FirebaseListObservable<any>;
  handler: any;
  constructor(
    private http: HttpClient,
    public authService: AuthenticationService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private paymentService: PaymentService
  ) {
    this.authService.user.subscribe(user => {
      if(user === null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });

  };

  productsInCart: FirebaseListObservable<any[]>;

  ngOnInit() {
    var vm = this;
    this.route.params.forEach((urlParameters) => {
      this.userId = urlParameters['id'];
    })
    this.productsInCart = this.productService.getItemsInCart(this.userId);
    this.currentCart = this.productService.getCurrentCart(this.userId);
    this.currentCart.subscribe(cart => {

      vm.cartLength = cart.length;
      cart.forEach(function(item) {
        vm.cartPrice += parseInt(item.price);
      });
      vm.cartTax = vm.cartPrice * 0.098;
      vm.cartCost = vm.cartPrice + this.cartTax;
    });
  }

  goToDetailPage(clickedProductKey) {
    this.router.navigate(['products', clickedProductKey]);
  };

  openCheckout() {
    var vm = this;
    this.handler = (<any>window).StripeCheckout.configure({
      key: masterStripeConfig.PUBLISHABLE_KEY,
      locale: 'auto',
      token: token => {
        //send token back to the service to update it in the database
        this.paymentService.processPayment(token, this.cartCost)
      }
    });

    var vm = this;
    document.getElementById('customButton').addEventListener('click', function(e) {
      vm.handler.open({
        name: 'Total Cost: $' + vm.cartCost,
        description: 'Price: $' + vm.cartCost + ' + Sales Tax: $' + vm.cartTax,
        amount: vm.cartCost * 100,
        zipCode: 'true',
        billingAddress: 'true',
        shippingAddress: 'true'
      });
      e.preventDefault();
    });

    window.addEventListener('popstate', function() {
      vm.handler.close();
    });
  }
}
