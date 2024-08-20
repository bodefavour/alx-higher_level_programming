#!/usr/bin/node
// Retrieve the first argument passed to the script
const size = parseInt(process.argv[2]);

// Check if the size is a valid positive number
if (!isNaN(size) && size > 0) {
  // Loop to print the square
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
} else {
  // Print error message if size is invalid
  console.log('Missing size');
}
