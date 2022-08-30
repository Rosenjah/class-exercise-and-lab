let jonSnowHealth = 100


//string conversion
// jonSnowHealth = 100 + ''
// console.log(jonSnowHealth)
//jonSnowHealth = String(jonSnowHealth)
// console.log(jonSnowHealth)

let theWinnerIs = `Jamie is the winner`

//winner reassigning
// theWinnerIs = theWinnerIs.toLowerCase().replace('jamie','Jon')

//saving to a new variable
let newWinner = theWinnerIs.toLowerCase().replace('jamie','Jon')
// console.log(theWinnerIs)


//convert-string-to-kebab-case 
//convert it to lowercase, then 

// newWinner = newWinner.toLowerCase().replaceAll(' ', '-')
//let newWinnerLower = newWinner.toLowerCase()
//let newWinnerSplit = newWinnerLower.split(' ')
//let newWinnerKebab = newWinnerSplit.join('-')

let newWinnerKebab = newWinner.toLowerCase().split(``).join(`-`)


//console.log(newWinner,'-------------',newWinnerKebab)


//functions

//lets create a function that will check to see if jon is alive

function isJonAlive(){
  if(jonSnowHealth>0){
    console.log(`Jon is alive!!!`)
  }else{
    console.log(`RIP Jon Snow.`)
  }
}

//isJonAlive()


//lets create a function that will be used every time Jon is attacked

function surpriseAttack(attack){
  jonSnowHealth -= attack
  isJonAlive()
  //return console.log(jonSnowHealth)(you dont have to return console.log)
}

surpriseAttack(21)
surpriseAttack(13)
surpriseAttack(32)
surpriseAttack(26)
surpriseAttack(26)


//create a function that allows two people to greet each other

function greetings(person1,person2) {
  console.log(`${person1} and ${person2} says hello to each other`)
}

greetings(`Isha`,`Jamie`)
greetings(`Haywood`,`Jon`)
greetings(`Tiffany`,`Jon`)




