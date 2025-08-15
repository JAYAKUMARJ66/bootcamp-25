// map examples
// 1. Prices to currency
let prices = [15.99, 29.5, 7.25];
console.log(prices.map(p => `$${p.toFixed(2)}`));