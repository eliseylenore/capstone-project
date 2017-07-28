'use strict';
import { masterStripeConfig } from './api-keys';
const bodyParser = require('body-parser');

const keyPublishable = masterStripeConfig.PUBLISHABLE_KEY;
const keySecret = masterStripeConfig.SECRET_KEY;
const app = require("express")();
const stripe = require("stripe")(keySecret);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//get route displays the payment form
app.get("/", (req, res) =>
  res.render("index.html", {keyPublishable}));

//post route receives the payment token and creates the charge
app.post("/charge", (req, res) => {
  let amount = 500;
  //Customer is charged $5
  stripe.customers.create({
     email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
         currency: "usd",
         customer: customer.id
    }))
  .then(charge => res.render("charge.html"));
});

app.listen(4567);
