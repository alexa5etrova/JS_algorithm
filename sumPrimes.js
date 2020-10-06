"use strict"
// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 
// 1 and itself. For example, 2 is a prime number because it is only 
// divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// sumPrimes returns the sum of all prime numbers 
// that are less than or equal to num.

function sumPrimes(num) {
    let result = 0;
    let i = 0;
    while (i <= num){
      if (isPrime(i)){
        result += i;
      }
      i++;
    }
    return result;
  }
 // function checks if a number is prime  
function isPrime(x) {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) return false;
    }
    return x !== 1 && x !== 0;
}
console.log(sumPrimes(10));
console.log(sumPrimes(977));