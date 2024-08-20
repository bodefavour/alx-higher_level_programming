#!/usr/bin/node
// Retrieve the argument from the command line
const number = parseInt(process.argv[2]);

// Function to compute factorial recursively
function factorial (n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Validate the input
if (!isNaN(number) && number >= 0) {
  console.log(factorial(number));
} else {
  process.exit();
}
