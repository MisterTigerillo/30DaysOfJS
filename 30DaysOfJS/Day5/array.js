// 1.1
const emptyBox = [];
// 1.2
const fullBox = [12, 24, "good", 400, "fridge", "007", "nice"];
console.log(fullBox);
// 1.3
console.log(fullBox.length);
// 1.4
console.log(
  `The first element is: ${fullBox[0]}, the middle is: ${
    fullBox[Math.floor(fullBox.length / 2)]
  }`
);
// 1.5
const mixedDataTypes = [5.5, {}, null, undefined, "Good will", []];
console.log(mixedDataTypes.length);

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
console.log(itCompanies);

// 1.8
console.log(itCompanies.length);

// 1.9
console.log(itCompanies[0], itCompanies[3], itCompanies[itCompanies.length - 1]);

// 1.10
console.log(itCompanies.join(', '));

// 1.11
console.log(itCompanies.toString().toUpperCase());
// 1.12
const cutCompanies = itCompanies.slice(0,5);
console.log(`${cutCompanies} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`);

// 1.13
if(itCompanies.includes('IBM')) {
  console.log("This array has your company");
} else {
 console.log('Your company is not in the array');
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
console.log(itCompanies.sort());
// 1.16
console.log(itCompanies.reverse());
// 1.17
console.log(itCompanies.slice(0,3));
// 1.18
const start = itCompanies.length - 3;
const end = itCompanies.length;
console.log(itCompanies);
console.log(itCompanies.slice(start, end));
// 1.19
// 1.20
// 1.21
// 1.22
// 1.23
