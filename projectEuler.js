// Problem 1: Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

/**
 * Problem 2: Even Fibonacci Numbers
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.
*/

function fiboEvenSum(n) {
  var fibo = [0, 1];
  var term = 0;
  var sum = 0;

  for (let i = 1; term <= n; i++) {
    term = fibo[i] + fibo[i - 1];
    fibo.push(term);
    if (term % 2 === 0) {
      sum += term;
    }
  }
  return sum;
}

/** Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?*/

function largestPrimeFactor(number) {
  let i = 2;
  while (number !== 1) {
    if (number % i === 0) {
      number = number / i;
    } else if (i === 2) {
      i = 3;
    } else {
      i += 2;
    }
  }

  return i;
}

/**Problem 4: Largest palindrome product
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.

 */

function largestPalindromeProduct(n) {
  let largestProduct = 0;
  const startValue = 10 ** (n - 1);
  const finishValue = 10 ** n - 1;

  for (let i = startValue; i < finishValue; i++) {
    for (let j = startValue + 1; j <= finishValue; j++) {
      let product = i * j;

      if (product === reverseNum(product) && product > largestProduct) {
        largestProduct = product;
      }
    }
  }

  function reverseNum(product) {
    let reverseNum = 0;
    while (product > 0) {
      reverseNum = reverseNum * 10 + (product % 10);
      product = Math.floor(product / 10);
    }
    return reverseNum;
  }
  return largestProduct;
}
