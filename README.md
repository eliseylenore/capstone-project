# Capstone Project: Dress To Impress
### By **Elise St Hilaire**

## Online store for fabulous job seekers, 05/15/2017
### Check out hosted site here: [https://capstone-project-9ac28.firebaseapp.com/](https://capstone-project-9ac28.firebaseapp.com/)_
![alt text](https://pbs.twimg.com/media/BvWSoLzCIAEjViD.jpg)

### Description
_As job seekers ourselves, we know that looking for a full-time job is not for the faint of heart. Even the smallest things can effect an impression. Since this is the case, we decided to open an online store that helps job seekers find professional-looking, worry-free clothing._

_Our site features interview-worthy clothing for men and women of all ages. We have utilized the Stripe API, which allowed us to easily incorporate payments._

### Installation
Run the following commands to install dependencies:
```sh
$ npm install
$ bower install
```

### Setup Firebase & Stripe
_Since our site uses a Firebase database and uses the Stripe API, you'll need to acquire your own credentials for both._

_Simply open your own account on the [Firebase website](https://firebase.google.com/)_

_Next, go to your user dashboard area and click **Create a New Project**.  Select **Add Firebase to your web app* and Firebase should respond with a pop-up window with your credentials._

_Now that your database exists, create a new file called **api-keys.ts** in the **src/app** directory. Then, place your Firebase credentials, like this:_

```sh
export var masterFirebaseConfig = {
  apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
};
```

_For Stripe, just sign into your account, go to Dashboard, and click on APIs. Copy and paste them into **api-keys.ts** in the following manner:_

```sh
export var masterStripeConfig = {
  SECRET_KEY: "xx_xxxx_xxxxxxxxxxxxxxxxx",
  PUBLISHABLE_KEY: "xx_xxxx_xxxxxxxxxxxxxxxxxxxxxx"
}
```

### Serve
Run the following command to run the app:
```sh
$ ng start
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## User stories/Specs
**User should be able to see basic website**
* Create home page
* Create layout page(dashboard)
* Create about page

**User should be able to view products**
* Create Product model: Product Name, Gender, Clothing, Price, Size, Color, Quantity, Description, ImageUrl
* Set up Firebase database and pre-seed it
* Make product-list component (view within home page)

**User should be able to view the items by categories**
* Create pipe to filter by size
* Create pipe to filter by gender
* Create pipe to filter by color
* Create pipe to filter by price
* Create pipe to filter by clothing(tops, bottoms, etc.)

**User should be able to view each individual item**
* Create product-detail page

**User should be able to add product to basket/cart**
* Create Cart model: List <Product>, Total Price
* Create component added-to-bag
* Create button to click
* Create Alert that you have added items (toggle the button/alert)
* Create new item to add to basket/cart (create new item and new cart simultaneously)
* Delete item from cart


**User should be able to checkout and purchase item**
* Create Sale model: Cart, Date
* Create component checkout/buy
* Create Sale itself

**User should be able to enter their credit card info**
* Possible customer model to be added to sale??
* Enter email
* Enter shipping address/billing address
* Enter credit card info

**User should receive confirmation of their order**
* Display shipping info, address, Name
* Send confirmation to email
* Redirect to home page

**

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
