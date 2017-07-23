const keyPublishable = masterStripeConfig.PUBLISHABLE_KEY;
const keySecret = masterStripeConfig.SECRET_KEY;

const app = require("express")();
const stripe = require("stripe")(keySecret);
