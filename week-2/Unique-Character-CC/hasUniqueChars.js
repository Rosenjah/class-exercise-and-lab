// Write your code below


//Instructions
// Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")
// // returns true
// hasUniqueChars("Moonday")
// // returns false
// Uppercase and lowercase letters should be considered separately:

// hasUniqueChars("Bob")
// // returns true




//other classmates solution
let word = 'Monday'

function hasUnique(checking){
  for(let i=0; i<=checking.length; i++){
      for(let j = i+1; j<=checking.length; j++){
          if(checking[j] === checking[i]){
            return false
      }
    }
  }
  return true
}
console.log(hasUnique(word))


//my solution
function hasUniqueChars(variable) {
  let uniqueChars = new Set([])
  for (let i = 0; i < variable.length; i++) {
    uniqueChars.add(variable[i])
  }
  return uniqueChars.size === variable.length
}
console.log(hasUniqueChars(monday))


//Kat's Solution
const hasUniqueChars = (word) => {
  let hasUniqueChar = true;
  const array = [];
  for (let i = 0; i < word.length; i++) {
    if (!array.includes(word[i])) {
      array.push(word[i])
    } else {
      hasUniqueChar = false
    }
  }
  return hasUniqueChar;
}


//group solution (didnt work)
let string = 'butter';

function hasUniqueChars(word){
    let wordArray = word.split('');
    for(let i =0; i < word.length; i++){
        for(let j=1; j < word.length; j++){
            if(wordArray[i] === wordArray[j]){
                return false
            }else{
                return true
            }
        }
    }
}

console.log(hasUniqueChars(string))