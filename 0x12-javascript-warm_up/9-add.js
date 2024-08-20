#!/usr/bin/node
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

if (!isNaN(num1) && !isNaN(num2)) {
  const sum = num1 + num2;
  console.log(sum);
} else {
  process.exit();
}
