//creating new object for a person with firstName,LastName & age

let person = {
  firstName: "Chanandler",
  lastName: "Bong",
  age: 35,
  likes: ["making jokes", "can i be any more weird", "basketball"],
};

//using dot notation access the firstName

console.log(person.firstName);

//using bracket notation access the lastName

console.log(person["lastName"]);

//using bracket notation access 2nd like

console.log(person["likes"][1]);

//Object Destructuring

let meal = {
  appetizzer: "chips & salsa",
  entree: "chille relleno",
  dessert: "churros",
  drink: "horchata",
};

//using object destructing destructure the dessert property off of the meal object

// let dessert = meal.dessert
// let drink = meal.drink
let { dessert, drink } = meal;

console.log(dessert, drink);

console.log(`${dessert} goes well with ${drink}`);

//lets destructure the remaining items in the same declaration

let { appetizzer, entree } = meal;

console.log(`${appetizzer} goes well with ${entree}`)

//lets destructure the drink and rename it 

let{drink:haywoodsDrink} = meal
console.log(haywoodsDrink)

//looping using a for-in loop
//lets loop over person object and console.log all the keys 

// for (key in person){
//   console.log(key)
// }

for(key in person){
  console.log(person[key])
}

//add properties

//lets add a job key to the person object 
person.job = `statistical analysis and data reconfiguration`;

//lets add pets (array) using bracket notation 
person[`pets`] = [`dogs`,`cats`]
console.log(person)


// delete properties

// let teams = {
//   teamOne:[`ryan`,`patrick`,`harry`, `haywood`,`dj`]
//   teamTwo:[`jillian`,`emily`,`k ellie`,`devin`,`devin`]
//   teamThree:[`hamzah`,`isha`,`teryn`,`ashley`]
// }

//delete team two
//delete teams.teamTwo
//console.log(teams)


//Classes
//lets add a greeting function/methid to our class to greet the user from the dog

class Dog {
  constructor(name,breed,age){
    this.name = name,
    this.breed = breed,
    this.age = age
  }


greeting(){
  console.log(`Hi, my name is ${this.name} and I am an ${this.age}year old, and I am ${this.breed}`)
}
}

let lassie= new Dog(`lassie`,`collie`,7)
console.log(lassie)

let beethoven = new Dog(`Beethoven`,`St. Brenard`, 2)
console.log(beethoven)

lassie.greeting()
beethoven.greeting()


//now we can loop over our instance of dog

for(key in lassie){
  console.log(lassie[key])
}

//extending classes

class Puppy extends Dog {
  constructor(name,color,breed,trainingLevel){
    super(name,color,breed)
    this.trainingLevel = trainingLevel
  }
  levelUp(num){
    this.trainingLevel = num
  }
}

let scrappyDoo = new Puppy(`scrappy`,`great-dane`,1,3)
scrappyDoo.greeting()
scrappyDoo.levelUp(5)

console.log(scrappyDoo)