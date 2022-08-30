// Write your code below
// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

// For example:

// isPalindrom("a")
// // returns true

// isPalindrom("noon")
// // returns true

// isPalindrom("hello")
// // returns false
// Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

// isPalindrom("Racecar")
// // returns false

// isPalindrom("racecar")
// // returns true





isPalindome = (str) => {
    return str === str.split("").reverse().join("");
  };
  
  
  // other ways of solving the problem
// let str =`racecar`
// isPalindome = (str) => {
//   let revstr = str.split("").reverse().join("");
//   if (str === revstr) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// isPalindome("racecar");
// isPalindome("Racecar");

