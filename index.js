function isPalindrome(word) {

  word = word.toLowerCase();
  let right = word.length -1;
  let wordright = [];
  for (let i = right; i >= 0; i--){

    wordright.push(word[i])
  }

return word === wordright.join('') ? true : false;
}
console.log("Expecting: true");
console.log('my test madam =>',isPalindrome('madam'));
console.log("Expecting: false");
console.log('my test robot =>' ,isPalindrome("robot"));

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));  
}
module.exports = isPalindrome;