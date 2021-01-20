/**
 * Callbacks
 */

function sum(valueA, valueB) {
  return valueA + valueB;
}

function calc(valueA, valueB, callback) {
  return callback(valueA, valueB);
}

console.log(calc(3, 9, sum));

function date(callback) {
  console.log(new Date());
  setTimeout(() => {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(date) {
  console.log(date);
}

date(printDate);
