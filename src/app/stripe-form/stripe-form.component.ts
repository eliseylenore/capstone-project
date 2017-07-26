import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { masterStripeConfig } from '../api-keys';
import { HttpClient } from '@angular/common/http';
import { FirebaseListObservable } from 'angularfire2/database';
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
    this.route.params.forEach((urlParameters) => {
      this.userId = urlParameters['id'];
    })
    console.log("User id: " + this.userId)
    this.productsInCart = this.productService.getItemsInCart(this.userId);
  }

  goToDetailPage(clickedProduct) {
    this.router.navigate(['products', clickedProduct.$key]);
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
