function isPalindrome(word) {
  // Write your algorithm here

  // let wordArray = [];
  let newArray =[];
  // for(i=0; i< word.length; i++){
  //   wordArray.push(word[i])
  // }
  for(i=0; i<word.length; i++){
    newArray.unshift(word[i])
  }

  const reversedWord = newArray.join("")

  return (word === reversedWord)
}

/* 
  Add your pseudocode here

  the function isPalindrome needs to accept a string then assess whether
  that string is the same forward as it is backwards, returning either true
  or false.

  i'm wondering if theres an existing function to render a string backwards, like
  toUppercase or toLowercase? if not i think i would need to write a function that 
  renders the individual letters of the string as separate elements in an array and 
  then creates a second array with the same letters as that first array in reverse order. 
  maybe this could be done using the .length property? so like newArray[0] = array[array.length] ? 
  to make the first letter of the new array equal to the last letter of the first array and then compare
  them? (but doing this as a loop through the array i guess?) hmmm...

  i guess more test cases would be other palindromes? i guess they wouldnt have to be words either like it
  could just be "xoxox" or "434" but some other palindromes are pop or radar
*/

/*
  Add written explanation of your solution here

  ok so i had isPalindrome() first assign a variable to an empty array called newArray (originally i had one 
  for the og word, but realized i didnt need it since... the word being input is already a string and i could
  just use unshift instead of creating the new array w the string and then reversing the array).
  THEN i set up a for loop to go through each letter of the word and add each one to the newArray using unShift
  so it would add each new letter to the beginning to reverse it.
  THEN using google i found out about the .join() function (i also found a .split and .reverse but i wanted to 
    try it my way first)
  and using .join("") i put the reversed array back into a string!
  THEN i just returned the og word as strictly equal to the new reversed word to return true or false if the
  reversed and the og are the same!
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("expecting: true")
  console.log("=>", isPalindrome("radar"))

  console.log("Expecting: true")
  console.log("=>", isPalindrome("!amanaplanacanalpanama!"))

  console.log("Expecting: false")
  console.log("=>", isPalindrome("oooghg oucchh im not a palindromeee"))
}

module.exports = isPalindrome;
