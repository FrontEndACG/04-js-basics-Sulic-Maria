// function calculateSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// const numbers = [1, 2, 3, 4, 5];
// const sum = calculateSum(numbers);
// console.log("Sum:", sum);

// 2.
// function calculateAverage(arr) {
//   if (arr.length === 0) {
//     return 0; // Avoid division by zero for empty arrays.
//   }

//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   const average = sum / arr.length;
//   return average;
// }

// // const numbers = [10, 20, 30, 40, 50];
// const average = calculateAverage(numbers);
// console.log("Average:", average);

// 3.
// function findSmallestAndLargest(arr) {
//   if (arr.length === 0) {
//     return { smallest: null, largest: null }; // Return null for both if the array is empty.
//   }

//   let smallest = arr[0];
//   let largest = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }

//   return { smallest, largest };
// }

// const numbers = [8, 2, 7, 3, 11];
// const { smallest, largest } = findSmallestAndLargest(numbers);

// console.log("Smallest:", smallest);
// console.log("Largest:", largest);

// 4.
// function reverseArray(arr) {
//   const reversedArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
//   }
//   return reversedArr;
// }

// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = reverseArray(originalArray);

// console.log("Reversed Array:", reversedArray);

// 5.
// function findElementPosition(arr, element) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === element) {
//       return `Element found at position ${i}.`;
//     }
//   }
//   return "Element not found in the array.";
// }

// const numbers = [10, 20, 30, 40, 50];
// const elementToFind = 30;
// const result = findElementPosition(numbers, elementToFind);

// console.log(result);

// 6.

// function countCharactersOfType(str, type) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     const char = str.charAt(i);
//     if (type === "Uppercase letters" && char >= "A" && char <= "Z") {
//       count++;
//     } else if (type === "Lowercase letters" && char >= "a" && char <= "z") {
//       count++;
//     } // Add more conditions for other types as needed.
//   }
//   return count;
// }

// const inputString = "Hello World";
// const typeToCount = "Uppercase letters";
// const count = countCharactersOfType(inputString, typeToCount);

// console.log(`Number of ${typeToCount}: ${count}`);

// 7.

// function isPalindrome(str) {
//   // Remove spaces and convert to lowercase for a case-insensitive comparison
//   const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   const reversedStr = cleanStr.split("").reverse().join("");

//   if (cleanStr === reversedStr) {
//     return `The string "${str}" is a palindrome.`;
//   } else {
//     return `The string "${str}" is not a palindrome.`;
//   }
// }

// const inputString = "racecar";
// const result = isPalindrome(inputString);

// console.log(result);

// 8.
// function reverseString(str) {
//   const reversedStr = str.split("").reverse().join("");
//   return reversedStr;
// }

// const inputString = "javascript";
// const reversed = reverseString(inputString);

// console.log("Reversed String:", reversed);

// 9.
// function removeWhitespace(str) {
//   return str.replace(/\s/g, "");
// }

// const inputString = "  Hello   World  ";
// const modifiedString = removeWhitespace(inputString);

// console.log("Modified String:", modifiedString);

// 10.
// function containsSubstring(str, substring) {
//   if (str.includes(substring)) {
//     return `The string contains the substring "${substring}".`;
//   } else {
//     return `The string does not contain the substring "${substring}".`;
//   }
// }

// const inputString = "JavaScript is a powerful language";
// const substringToCheck = "powerful";
// const result = containsSubstring(inputString, substringToCheck);

// console.log(result);

// 11.

// function displayMultiplicationTable(number, times) {
//   console.log(`Multiplication Table for ${number}:`);
//   for (let i = 1; i <= times; i++) {
//     const result = number * i;
//     console.log(`${number} x ${i} = ${result}`);
//   }
// }

// const inputNumber = 7;
// const numberOfTimes = 10;
// displayMultiplicationTable(inputNumber, numberOfTimes);

// 12.
// function isPrime(number) {
//     if (number <= 1) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   function findPrimesUpTo(limit) {
//     const primes = [];
//     for (let num = 2; num <= limit; num++) {
//       if (isPrime(num)) {
//         primes.push(num);
//       }
//     }
//     return primes;
//   }

//   const inputLimit = 20;
//   const primeNumbers = findPrimesUpTo(inputLimit);
//   console.log(`Prime numbers up to ${inputLimit}: ${primeNumbers.join(', ')}`);

// 13.

function generateFibonacciSeries(count) {
  if (count <= 0) {
    return [];
  } else if (count === 1) {
    return [0];
  } else if (count === 2) {
    return [0, 1];
  }

  const series = [0, 1];
  for (let i = 2; i < count; i++) {
    const nextNumber = series[i - 1] + series[i - 2];
    series.push(nextNumber);
  }

  return series;
}

const inputCount = 8;
const fibonacciSeries = generateFibonacciSeries(inputCount);
console.log(
  `Fibonacci Series (first ${inputCount} numbers): ${fibonacciSeries.join(
    ", "
  )}`
);
