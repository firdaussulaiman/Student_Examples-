const cartTotal = 16.07;
const roundedUpCart = Math.ceil(cartTotal); // using Math library
const donation = (roundedUpCart - cartTotal).toFixed(2); // business logic
console.log(donation);
