import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUPLIC_STRIPE_PUPLISHABLE_KEY);
  }
  return stripePromise;
};

export default getStripe;
