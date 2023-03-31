// Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward,
//  ignoring punctuation, case, and spacing.






function isPalindrome(word) {
  // Write your algorithm here
  let newPalindrome = word.toLowerCase().replace(/[^a-z\d]/g, '');
return newPalindrome.split('').reverse().join('') === newPalindrome;
}

/* 
  Add your pseudocode here

  You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
and turn everything into the same case (lower or upper case) in order to check for palindromes.

*/

/*
  Add written explanation of your solution here
*/

console.log(isPalindrome("abba___"));

console.log(isPalindrome("racecar___"));

console.log(isPalindrome("a___"));

console.log(isPalindrome("robit___"));

console.log(isPalindrome("ab___"));

// // You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

// module.exports = isPalindrome;
