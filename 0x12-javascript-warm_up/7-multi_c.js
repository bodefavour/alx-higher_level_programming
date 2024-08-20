#!/usr/bin/node
// Access the first argument passed to the script
const firstArgument = process.argv[2];

// Convert the first argument to an integer
const count = parseInt(firstArgument);

// Check if the conversion is valid and count is a positive number
if (!isNaN(count) && count > 0) {
  // Print "C is fun" count times
  for (let i = 0; i < count; i++) {
    console.log('C is fun');
  }
} else {
  // Print "Missing number of occurrences" if conversion fails or count is non-positive
}
