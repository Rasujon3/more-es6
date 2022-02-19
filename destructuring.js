const fish = {
  id: 58,
  name: "King Hilsha",
  price: 9000,
  phone: "017171717",
  address: "chadpur",
  dress: "silver",
};
/* const phone = fish.phone;
const price = fish.price;
const dress = fish.dress;
const id = fish.id; */

/* const { phone, price, dress, id } = fish;

console.log(phone, id);
console.log(price);
console.log(dress);
console.log(price);
console.log(phone); */

const company = {
  name: "GP",
  ceo: { id: 1, name: "ajmol", food: "fuchka" },
  web: {
    work: "website development",
    employee: 22,
    framework: "react",
    tech: {
      first: "html",
      second: "css",
      third: "js",
    },
  },
};

/* const work = company.web.work;
console.log(work);
const framework = company.web.framework;
console.log(framework); */

const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
console.log(work, framework, food, second);
