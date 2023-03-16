function Calculator(str) {
  this.str = str.split(" ");

  this.calculate = function () {
    return this.str[1] == "+"
      ? +this.str[0] + +this.str[2]
      : +this.str[0] - +this.str[2];
  };

  this.addMethod = function (name, func) {
    return;
  };
}

let sum = new Calculator("3 + 7");
let result = sum.calculate();
console.log(result);

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
