// 1.1
let firstName = "Kevin";
let lastName = "McCallister";
let country = "USA";
let city = "New York";
let age = 8;
let isMarried = false;
let year = 1990;

console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year
);

// 1.2
console.log(typeof "10" == typeof 10);

// 1.3
console.log(parseInt("9.8") == 10);

// 1.4
console.log(typeof 5 === typeof 3);

const a = [];
const b = a;
console.log(b === a);

console.log(typeof NaN === typeof 0);

console.log({} == []);

console.log("" == " ");

console.log(10 === Math.floor(9.6));

// 1.5
console.log(
  4 > 3,
  4 >= 3,
  4 < 3,
  4 <= 3,
  4 == 4,
  4 === 4,
  4 != 4,
  4 !== 4,
  4 != "4",
  4 == "4",
  4 === "4"
);
console.log("jargon".length != "python".length);

// 1.6
// true false true true false true true false true true

console.log(
  4 > 3 && 10 < 12,
  4 > 3 && 10 > 12,
  4 > 3 || 10 < 12,
  4 > 3 || 10 > 12,
  !(4 > 3),
  !(4 < 3),
  !false,
  !(4 > 3 && 10 < 12),
  !(4 > 3 && 10 > 12),
  !(4 === "4"),
  "dragon".includes("on") == "python".includes("on")
);

// 1.7

const date = new Date();

console.log(
  date.getFullYear(),
  date.getMonth() + 1,
  date.getDate(),
  date.getHours(),
  date.getMinutes(),
  date.getTime()
);

// 2.1
// const bess = prompt("Enter base: ");
// const geight = prompt("Enter height: ");
// console.log(`The area of the triangle is ${0.5 * bess * geight}`);

// 2.2

// const as = prompt("Enter side a: ");
// const bs = prompt("Enter side b: ");
// const cs = prompt("Enter side c: ");
// console.log(
//   `The perimeter of the triangle is ${Number(as) + Number(bs) + Number(cs)}`
// );

// 2.3

// const length = prompt("Enter length: ");
// const width = prompt("Enter width: ");

// console.log(
//   `The area is ${length * width}; The perimeter is ${
//     2 * (Number(length) + Number(width))
//   }`
// );

// 2.4
// const radius = prompt("Enter radius: ");
// const pee = Math.PI;
// console.log(
//   `The area of a circle: ${pee * radius * radius}, circumference of a circle: ${
//     2 * pee * radius
//   }`
// );

// 2.5

// 2.6

// 2.7

// 2.8

// 2.9
// let hours = prompt("Enter hours: ");
// let ratePerHour = prompt("Enter rate per hour: ");
// console.log(`Your weekly earning is ${hours * ratePerHour}`);

// 2.10
let myName = "Dmytro";
// console.log(myName.length > 7);
console.log(
  myName.length >= 7
    ? "Your name is longer than seven or equal to it"
    : "Your name is shorter than seven"
);

// 2.11
let firstN = "Dmytro";
let lastN = "Gobosh";

console.log(
  firstN.length > lastN.length
    ? `Your first name, ${firstN} is longer than your family name, ${lastN}`
    : `Your first name, ${firstN} is shorter than your family name or is equal to ${lastN}`
);

// 2.12
let myAge = 100;
let yourAge = 100;

console.log(
  myAge > yourAge
    ? `I am ${myAge - yourAge} year(s) older than you.`
    : myAge < yourAge
    ? `I am ${yourAge - myAge} year(s) younger than you`
    : "I'm your peer"
);
// 2.13
// const birthYear = prompt("Enter birth year: ");
// const currentYear = 2022;
// const diff = currentYear - birthYear;
// console.log(
//   diff >= 18
//     ? `You are ${diff}. You are old enough to drive`
//     : `You are ${diff}. You will be allowed to drive after ${18 - diff} years.`
// );

// 2.14
// const years = prompt("Enter number of years you live: ");
// console.log(`You lived ${years * 365 * 24 * 60 * 60} seconds.`);
// 2.15

let newData = new Date();
console.log(
  String(newData.getFullYear()).concat(
    "-",
    newData.getMonth() + 1,
    "-",
    newData.getDate(),
    " ",
    newData.getHours(),
    ":",
    newData.getMinutes()
  )
);

const now = new Date();
const yeard = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const dated = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes(); // return number (0 -59)

console.log(`${dated}-${month}-${yeard} ${hours}:${minutes}`);
console.log(`${dated}/${month}/${yeard} ${hours}:${minutes}`);

// 3.1
const final = new Date();
console.log(
  `${final.getDate()}/${final.getMonth() + 1}/${final.getFullYear()} ${
    hours < 10 ? String(`0${hours}`) : hours
  }:${minutes < 10 ? String(`0${minutes}`) : minutes}`
);
