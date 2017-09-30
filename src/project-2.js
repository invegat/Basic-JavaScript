// Do not change any of the function names
const map = require('./arrays.js').map
const reduce = require('./arrays.js').reduce

const getBiggest = (x, y) => {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x > y) {
    return x
  }
  return y
};

const greeting = (language) => {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Spanish' -> 'Hola!'
  // language: 'Chinese' -> 'Ni Hao!'
  // if language is undefined return 'Hello!'
  switch (language) {
    case 'German': return 'Guten Tag!'
    case 'Spanish': return 'Hola!'
    case 'Chinese': return 'Ni Hao!'
    default: return 'Hello!'
  }
};

const isTenOrFive = (num) => {
  // return true if num is 10 or 5
  // otherwise return false
  return num === 10 || num === 5
};

const isInRange = (num) => {
  // return true if num is less than 50 and greater than 20
  return num < 50 && num > 20
};

const isInteger = (num) => {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  return Math.floor(num) === num
};

const fizzBuzz = (num) => {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 15 === 0) {
    return 'fizzbuzz'
  }
  if (num % 3 === 0) {
    return 'fizz'
  }
  if (num % 5 === 0) {
    return 'buzz'
  }
  return num
}

// leastFactor(n)
// returns the smallest prime that divides n
//     NaN if n is NaN or Infinity
//      0  if n=0
//      1  if n=1, n=-1, or n is not an integer

const leastFactor = (n) => {
  if (isNaN(n) || !isFinite(n)) return NaN;
  if (n === 0) return 0;
  if (n % 1 || n * n < 2) return 1;
  if (n % 2 === 0) return 2;
  if (n % 3 === 0) return 3;
  if (n % 5 === 0) return 5;
  const m = Math.sqrt(n);
  for (let i = 7; i <= m; i += 30) {
    if (n % i === 0) return i;
    if (n % (i + 4) === 0) return i + 4;
    if (n % (i + 6) === 0) return i + 6;
    if (n % (i + 10) === 0) return i + 10;
    if (n % (i + 12) === 0) return i + 12;
    if (n % (i + 16) === 0) return i + 16;
    if (n % (i + 22) === 0) return i + 22;
    if (n % (i + 24) === 0) return i + 24;
  }
  return n;
}

const isPrime = (n) => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers

  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
  if (n === leastFactor(n)) return true;
  return false;
}

const returnFirst = (arr) => {
  // return the first item from the array
  return arr[0]
};

const returnLast = (arr) => {
  // return the last item of the array
  return arr[arr.length - 1]
};

const getArrayLength = (arr) => {
  // return the length of the array
  return arr.length
};

const incrementByOne = (arr) => {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  return map(arr, (i) => { return i + 1 })
};

const addItemToArray = (arr, item) => {
  // add the item to the end of the array
  // return the array
  arr.push(item)
  return arr
};

const addItemToFront = (arr, item) => {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item)
  return arr
};

const wordsToSentence = (words) => {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  return reduce(words, (acc, w, i) => {
    return (i === 0 ? w : `${acc} ${w}`)
  }, '')
}

const contains = (arr, item) => {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  return arr.indexOf(item) >= 0
};

const addNumbers = (numbers) => {
  // numbers is an array of integers.
  // add all of the integers and return the value
  return reduce(numbers, (acc, number) => { return acc + number }, 0)
};

const averageTestScore = (testScores) => {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  return addNumbers(testScores) / testScores.length
};

const largestNumber = (numbers) => {
  // numbers is an array of integers
  // return the largest integer
  return reduce(numbers, (acc, number) => { return Math.max(acc, number) }, Number.NEGATIVE_INFINITY)
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
};
