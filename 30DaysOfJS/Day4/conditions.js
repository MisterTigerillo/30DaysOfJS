// 1.1
// let age = prompt("Enter your age: ");

// if (age >= 18) {
//   console.log("You are old enough to drive");
// } else {
//   console.log(`You are left with ${18 - age} year(s) to drive.`);
// }

// 1.2
// let myAge = 27;
// let yourAge = prompt("Enter your age: ");

// if (yourAge > myAge) {
//   console.log(`You are ${yourAge - myAge} year(s) older than me.`);
// } else {
//   console.log(`You are ${myAge - yourAge} year(s) younger than me.`);
// }

// 1.3
let a = 100;
let b = 105;

a > b
  ? console.log(`${a} is greater than ${b}`)
  : a < b
  ? console.log(`${a} is lesser than ${b}`)
  : console.log(`${a} is equal to ${b}`);

// 1.4
// let numbo = prompt("Enter a number: ");
// if (numbo % 2 === 0) {
//   console.log(`${numbo} is an even number`);
// } else {
//   console.log(`${numbo} is not an even number`);
// }

// 2.1
// let grade = prompt("Your grade: ");

// if (grade >= 80 && grade <= 100) {
//   console.log("AAA");
// } else if (grade >= 70 && grade <= 89) {
//   console.log("Bbratzo");
// } else if (grade >= 60 && grade <= 69) {
//   console.log("Congratz");
// } else if (grade >= 50 && grade <= 59) {
//   console.log("Damn");
// } else {
//   console.log("Fuck");
// }

// 2.2
// const month = prompt("Your month is: ");
// switch (month.toLowerCase()) {
//   case "september":
//   case "october":
//   case "november":
//     console.log("Hello Autumn");
//     break;
//   case "december":
//   case "january":
//   case "february":
//     console.log("Hello Winter");
//     break;
//   case "march":
//   case "april":
//   case "may":
//     console.log("Hello Spring");
//     break;
//   case "june":
//   case "july":
//   case "august":
//     console.log("Hello Summer");
//     break;
//   default:
//     console.log("Some Garbage");
// }

// 2.3
// const input = prompt("What is the day today?: ");
// const day = input.toLowerCase();
// switch (day) {
//   case "monday":
//   case "tuesday":
//   case "wednesday":
//   case "thursday":
//   case "friday":
//     console.log(`${day[0]
//       .toUpperCase()
//       .concat(day.substring(1, day.length))} is a weekend.
// `);
//     break;
//   case "saturday":
//   case "sunday":
//     console.log(`${day[0]
//       .toUpperCase()
//       .concat(day.substring(1, day.length))} is a weekend.
// `);
//     break;
//   default:
//     console.log("some shit");
// }

// 3.1
const monthInput = prompt("Enter a month: ");
const month = monthInput.toLowerCase();

switch (true) {
  case month === "january" ||
    month === "march" ||
    month === "may" ||
    month === "july" ||
    month === "august" ||
    month === "october" ||
    month === "december":
    alert(`${month} has 31 days.`);
    break;
  case month === "february":
    console.log(confirm());
    alert(`${month} has 28 or 29 days.`);
    break;
  case month === "april" ||
    month === "june" ||
    month === "september" ||
    month === "november":
    alert(`${month} has 30 days.`);
    break;
}
