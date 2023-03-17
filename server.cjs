require("dotenv").config();

// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });
const stripe = require("stripe")("sk_test_51MgQVwIHr18KxiWWSOQuuuOUGSdWYRRqOWbOmHazK9cGiVXWIQ8jbNfAvkXzs67IgVHuBZ30Hf80KZPixtItE7qp00nQcYbwmh");

// Fetch the publishable key to initialize Stripe.js
fastify.get("/publishable-key", () => {
  return { publishable_key: "pk_test_51MgQVwIHr18KxiWWc6D8JJ3gX9083GKHp1GBCHUi6fjQuRDUbRIn8rpZ1bcaMvyWj4QvJLTkBrsbFyITznZ8jEbg00kkw41Oq8" };
});

// Create a payment intent and return its client secret
fastify.post("/create-payment-intent", async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 500,
    currency: "gbp",
    payment_method_types: ["card"],
  });

  return { client_secret: paymentIntent.client_secret };
});

// Run the server
const start = async () => {
  try {
    await fastify.listen({port: 5252});
    console.log("Server listening ... ");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();