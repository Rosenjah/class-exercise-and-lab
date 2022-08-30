// Instructions
// Given a string, return true or false depending on whether that string has balanced parentheses.


// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

function balancedParens(str) {
  let openPar = 0
  let closedPar = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      openPar += 1
    } else if (str[i] === ")") {
      closedPar += 1
    }
  }
  return openPar === closedPar
}

console.log (balancedParens(sample1))
console.log (balancedParens(sample2))
console.log (balancedParens(sample3))
console.log (balancedParens(sample4))



// other ways to solve:

has_balanced_parens = (str) => {
  let left = 0
  let right = 0
  str.split('')
  for(i=0;i<str.length;i++){
      if(str[i]==='('){
          left ++
      }
      else if (str[i]===")"){
       right ++
      }
  }
  if (left == right){
      return true
  }
  else{return false}
}



const has_balanced_parens = str => {
  let openParenCount=0;
  let closeParensCount=0;
  for(let i=0; i<str.length ; i++)
  {
      if(str[i]==='(')
      {
          openParenCount+=1
      }
      else if (str[i]===')')
      {
          closeParensCount+=1
      }
  }
  return console.log(openParenCount===closeParensCount)
}