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
const mixedDataTypes = [5.5, {}, null, undefined, 'Good will', [], 66];
console.log(mixedDataTypes.length);

// 1.6
const itCompanies  = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']