#!/usr/bin/node
// Access the first argument passed to the script
const firstArgument = process.argv[2];

// Convert the first argument to an integer
const number = parseInt(firstArgument);

// Check if the result is a valid number
if (!isNaN(number)) {
  console.log(`My number: ${number}`);
} else {
  console.log('Not a number');
}

