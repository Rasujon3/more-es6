const friends = ["Tom Hanks", "Tom Cruise", "Tom Brady", "Tom Solaiman"];

const fLengths = friends.map((friend) => friend.length);
// console.log(fLengths);

const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 3, color: "white" },
];

const productNames = products.map((product) => console.log(product));
const productPrices = products.map((product) => product.price);
// products.map((product) => console.log(product.color));
const item = products.forEach((product) => product.name);
// console.log(productPrices);
console.log(item);
