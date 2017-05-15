# CapstoneProject

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
* Create Alert that you have added items
* Create new item to add to basket/cart


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
