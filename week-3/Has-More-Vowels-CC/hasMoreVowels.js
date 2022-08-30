const hasMoreVowels = word => {
  let vowels = [`a`,`e`,`i`,`o`,`u`]
  let vowelCount = 0
  let vowelsNeeded = word.length / 2
  let wordSplit = word.toLowerCase().split(``)

  for (let i=0; i < wordSplit.length; i++){
    let letter = wordSplit[i]

    if (vowels.includes(letter)) {
      vowelCount++
    }

    if (vowelCount > vowelsNeeded){
      return true
    }
  }
  return false
}


console.log(hasMoreVowels('moose'))
console.log(hasMoreVowels('Aal'))
console.log(hasMoreVowels('yay'))
console.log(hasMoreVowels('mice'))




// Other ways of solving the  problem 
const hasMoreVowels = str =>{
  const vowelsArr = ['a','e','o','i','u']
  const strArr = str.split('')
  let vowel =0;
  for(let i=0; i<strArr.length ;i++)
  {
     if(vowelsArr.includes(strArr[i].toLowerCase())){
         vowel ++ ;
     }
  }
     if(vowel > strArr.length/2)
     {
         return true;
     }
     else {
         return false;
     }
 }







 regexp = /[aeiou]/
regexpcons = /[bcdfghjklmnpqrstvwxyz]/
let vowcount
let conscount
const moreVowels = (string)=> {
     vowcount = 0
     conscount = 0
    string = string.toLowerCase().trim()
    let strarr = string.split('')
    for(i=0;i<strarr.length;i++){
        regexp.test(strarr[i])=== true ? vowcount++ :regexpcons.test(strarr[i])=== true? conscount++:"invalid input"
    }
 return conscount > vowcount ? There are more consonants: (${conscount} consonants) and (${vowcount} vowels):conscount < vowcount? There are more vowels: (${conscount} consonants) and (${vowcount} vowels) : They are the same (${conscount} consonants) and (${vowcount} vowels)
}
console.log (moreVowels('beep bop'))


