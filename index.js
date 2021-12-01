function isPalindrome(word) {
  for (let i = 0; i < word.length; i++) {
    const j = word.length - 1 - i;
    const startChar = word[i];
    const endChar = word[j];
    if (startChar !== endChar) {
      return false;
    }
    return true;
  }
}

/* 
  create function palindrome that takes a string as an argument
    iterate through the length of the word
      create variable for the first character
      create variable for the last character
      if first character is equal to the last character
        return true
      if first character is not equal to the last character
        return false
*/

/*
  First, I iterated through the length of the word divided by two. 
  Then, I saved the initial value of i to startChar and the initial value of j to endChar.
  Next, I set up an if statement. If the startChar was not equal to endChar, the function returns false.
  If startChar was equal to endChar, the function returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
