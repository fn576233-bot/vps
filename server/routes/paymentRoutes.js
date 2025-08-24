const express = require('express');
const Stripe = require('stripe');
const router = express.Router();

const stripe = Stripe('sk_test_your_secret_key'); // Replace with your Stripe key

router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;