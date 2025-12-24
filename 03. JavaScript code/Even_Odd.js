function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return `${number} is even.`;
  } else {
    return `${number} is odd.`;
  }
}

// Example :
console.log(checkEvenOrOdd(4)); // Output: 4 is even.
console.log(checkEvenOrOdd(7)); // Output: 7 is odd.
