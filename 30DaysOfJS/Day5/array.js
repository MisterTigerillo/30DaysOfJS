// "use strict";
import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

// 1.1
const emptyBox = [];
// 1.2
const fullBox = [12, 24, "good", 400, "fridge", "007", "nice"];
console.log("1.2", fullBox);
// 1.3
console.log("1.3", fullBox.length);
// 1.4
console.log(
  "1.4",
  `The first element is: ${fullBox[0]}, the middle is: ${
    fullBox[Math.floor(fullBox.length / 2)]
  }`
);
// 1.5
const mixedDataTypes = [5.5, {}, null, undefined, "Good will", []];
console.log("1.5", mixedDataTypes.length);

// 1.6
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 1.7
console.log("1.7", itCompanies);

// 1.8
console.log("1.8", itCompanies.length);

// 1.9
console.log(
  "1.9",
  itCompanies[0],
  itCompanies[3],
  itCompanies[itCompanies.length - 1]
);

// 1.10
console.log("1.10", itCompanies.join(", "));

// 1.11
console.log("1.11", itCompanies.toString().toUpperCase());
// 1.12
const cutCompanies = itCompanies.slice(0, 5);
console.log(
  "1.12",
  `${cutCompanies} and ${
    itCompanies[itCompanies.length - 1]
  } are big IT companies.`
);

// 1.13
if (itCompanies.includes("IBM")) {
  console.log("1.13", "This array has your company");
} else {
  console.log("1.13", "Not found");
}
// 1.14
// console.log(itCompanies.includes('o').itCompanies.sort());
// console.log(itCompanies[0].includes('o'));
// console.log(itCompanies.sort((company) => {
//   if ("o" > 1)
//       return 1;
//   if ("o" <= 1)
//       return -1;
//   return 0;
// }));
// 1.15

console.log("1.15", itCompanies.sort());
// 1.16
console.log("1.16", itCompanies.reverse());
// 1.17
console.log("1.17", itCompanies.slice(0, 3));
// 1.18
const start = itCompanies.length - 3;
const end = itCompanies.length;
console.log("1.18", itCompanies.slice(start, end));
// 1.19
const Companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
  "Foo",
  "Good",
];
if (Companies.length % 2 === 0) {
  const middler = Companies.length / 2;
  const premiddler = middler - 1;
  console.log("1.19", Companies[premiddler], Companies[middler]);
} else {
  const oddMiddler = Math.floor(Companies.length / 2);
  console.log("1.19", Companies[oddMiddler]);
}
// 1.20
console.log(itCompanies);
itCompanies.shift();
console.log("1.20", itCompanies);

// 1.21
// console.log(itCompanies.length % 2 === 0);
itCompanies.length % 2 === 0
  ? itCompanies.splice(itCompanies.length / 2, 1)
  : console.log(
      "Odd",
      itCompanies.splice(console.log(Math.floor(itCompanies.length / 2)), 1)
    );
console.log("1.21", itCompanies);
// 1.22
itCompanies.pop();
console.log("1.22", itCompanies);
// 1.23
itCompanies.splice(0);
console.log("1.23", itCompanies);

// 2.2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

const words = text.split(" ");
console.log(words);
// console.log(words.length);

// 2.3
// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey", "Ginger"];
// if (shoppingCart.indexOf("Meat") == -1) {
//   shoppingCart.unshift("Meat");
// }
// if (shoppingCart.indexOf("Sugar") == -1) {
//   shoppingCart.push("Sugar");
// }
// let isAllergic = confirm("Are you allergic or not?");
// if (isAllergic) {
//   let indexOfHoney = shoppingCart.indexOf("Honey");
//   console.log(indexOfHoney);
//   shoppingCart.splice(indexOfHoney, 1);
// }

// let indexOfTea = shoppingCart.indexOf("Tea");
// shoppingCart[indexOfTea] = "Green Tea";

// console.log(shoppingCart);

// console.log(countries);
function getMaxSubSum(array) {
  let finalSum = 0;
  let sum = 0;
  for (let item of array) {
    finalSum += item;
    console.log(finalSum);
    if (item < 0) {
      finalSum = 0;
    }
    // finalSum = Math.max(finalSum, sum);
  }
  return finalSum;
}

console.log(
  getMaxSubSum([-1, 2, 3, -9])
  // getMaxSubSum([2, -1, 2, 3, -9]),
  // getMaxSubSum([-1, 2, 3, -9, 11]),
  // getMaxSubSum([-2, -1, 1, 2]),
  // getMaxSubSum([100, -9, 2, -3, 5]),
  // getMaxSubSum([1, 2, 3])
);
