#!/usr/bin/node
// Retrieve the arguments from the command line, excluding the first two (node and script path)
const args = process.argv.slice(2).map(Number);

// Handle cases with no arguments or only one argument
if (args.length <= 1) {
  console.log(0);
} else {
  // Sort the arguments in descending order
  args.sort((a, b) => b - a);

  // Print the second biggest number
  console.log(args[1]);
}
