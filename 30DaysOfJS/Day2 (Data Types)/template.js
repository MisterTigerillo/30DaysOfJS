// 1.1
let challenge = "30 Days Of Javascript";
// 1.2
console.log(challenge);
// 1.3
console.log(challenge.length);
// 1.4
console.log(challenge.toUpperCase());
// 1.5
console.log(challenge.toLowerCase());
// 1.6
console.log(challenge.substr(0, 2));
// 1.7
console.log(challenge.substring(3, challenge.length));
// 1.8
console.log(challenge.includes("Script"));
// 1.9
console.log(challenge.split(""));
// 1.10
console.log(challenge.split(" "));
// 1.11
const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(", "));
// 1.12
console.log(challenge.replace("Javascript", "Python"));
// 1.13
console.log(challenge.charAt(15));
// 1.14
console.log(challenge.charCodeAt("J"));
// 1.15
console.log(challenge.indexOf("a"));
// 1.16
console.log(challenge.lastIndexOf("a"));
// 1.17
const sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));
// 1.18
console.log(sentence.lastIndexOf("because"));
// 1.19
console.log(sentence.search("because"));
// 1.20
const trimmer = "   Chop Chop Chips   ";
console.log(trimmer.trim());
// 1.21
console.log(challenge.startsWith("30"));
// 1.22
console.log(challenge.endsWith("ript"));
// 1.23
console.log(challenge.match(/a/g));
// 1.24
let stringo = "30 Days Of ";
console.log(stringo.concat("Javascript"));
// 1.25
console.log(challenge.repeat(2));

// 2.1
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
// 2.2
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
// 2.3
console.log(typeof parseInt("10") == typeof 10);
// 2.4
console.log(Math.round(parseFloat(9.8)) == 10);
// 2.5
console.log("python".includes("on"), "jargon".includes("on"));
// 2.6
console.log(2.6, "I hope this course is not full of jargon".includes("jargon"));
// 2.7
console.log(Math.floor(Math.random() * 100));
// 2.8
console.log(Math.floor(Math.random() * 50 + 50));
// 2.9
console.log(Math.floor(Math.random() * 256));
// 2.10
const language = "JavaScript";
const randomid = Math.floor(Math.random() * language.length);
console.log(randomid);
console.log(language[randomid]);
// 2.11
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
// 2.12
const phrase =
  "You cannot end a sentence with because because because is a conjunction";
const pattern = phrase.match(/because because because /gi)[0];
const firstIndex = phrase.search("b");

console.log(
  phrase
    .substr(phrase[0], firstIndex)
    .concat(phrase.substr(firstIndex + pattern.length, phrase.length - 1))
);
// 3.1
const secondPhrase =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
const word = /love/gi;

console.log(secondPhrase.match(word).length);
// 3.2
const thirdPhrase =
  "You cannot end a sentence with because because because is a conjunction";
const because = /because/gi;

console.log(thirdPhrase.match(because).length);
// 3.3
let sent =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching.";
const patternTwo = /[;,%,$,@,#,&,!]/g;
const patternThree = /[\s.?]+/g;
sentTwo = sent.substring(0, sent.length - 1).replace(patternTwo, "");

sentTwo = sentTwo.split(patternThree);
console.log(sentTwo);

const count = {};
const array = [];

sentTwo.forEach(element => {
  array.push(element);
  console.log(array);
  //   console.log(element);
  count[element] = (count[element] || 0) + 1;
});

// const array = [];

// const obj = count.map(countEl => {});

// 3.4
// const stringy =
//   "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
// const stringSums = stringy.match(/\d+/g);
// console.log(
//   Number(stringSums[0]) + Number(stringSums[1]) + Number(stringSums[2])
// );
