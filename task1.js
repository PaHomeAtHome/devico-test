"use strict";

function calc(newNumber, operator) {
  const add = () => (calc.prevValue += newNumber);
  const sub = () => (calc.prevValue -= newNumber);
  const multiply = () => (calc.prevValue *= newNumber);
  const divide = () => (calc.prevValue /= newNumber);
  switch (operator) {
    case "+":
      console.log(add());
      break;
    case "-":
      console.log(sub());
      break;
    case "*":
      console.log(multiply());
      break;
    case "/":
      console.log(divide());
      break;
    default:
      console.log(`Sorry, operation ${operator} is not correct`);
  }
}
calc.prevValue = 0;
calc(5, "+"); // 5
calc(2, "*"); // 10
calc(3, "-"); // 7
calc(2, "*"); // 14
calc(7, "/"); // 2
