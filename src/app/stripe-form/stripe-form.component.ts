import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { masterStripeConfig } from '../api-keys';
import { HttpClient } from '@angular/common/http';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-stripe-form',
  templateUrl: './stripe-form.component.html',
  styleUrls: ['./stripe-form.component.scss'],
  providers: [ ProductService, AuthenticationService ]
})

export class StripeFormComponent implements OnInit {
  public isLoggedIn: Boolean;
  private userId: String;
  public cartPrice: number = 0;
  public cartCost: number = 0;
  public cartTax: number = 0;
  private currentCart: FirebaseListObservable<any>;

  constructor(
    private http: HttpClient,
    public authService: AuthenticationService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.authService.user.subscribe(user => {
      console.log(user.uid);
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
      console.log("subscribing!");
      cart.forEach(function(item) {
        vm.cartPrice += parseInt(item.price);
      });
      console.log("this.cartPrice: " + vm.cartPrice);
      vm.cartTax = vm.cartPrice * 0.098;
      vm.cartCost = vm.cartPrice + this.cartTax;
      console.log("totalPrice: " + vm.cartPrice + " tax: " + vm.cartTax + ", cost: " + vm.cartCost)
    });



  }

  goToDetailPage(clickedProductKey) {
    this.router.navigate(['products', clickedProductKey]);
  };

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: masterStripeConfig.PUBLISHABLE_KEY,
      locale: 'auto',
      token: function (token: any) {
          return this.http.post('/stripe.com/api/bootstrap?key=pk_test_O13VvsWUjRzTeq5SJhzKEAUT&locale=en-US/charge', token).subscribe(data => {
            this.results = data['results'];
            console.log("post result!!! " + this.results);
          })
      }
    });

    var vm = this;
    document.getElementById('customButton').addEventListener('click', function(e) {
      handler.open({
        name: 'Total Cost: $' + vm.cartCost,
        description: 'Price: $' + vm.cartCost + ' + Sales Tax: $' + vm.cartTax,
        amount: vm.cartCost * 100,
        zipCode: 'true'
      });
      e.preventDefault();
    });

    window.addEventListener('popstate', function() {
      handler.close();
    });
  }
}
