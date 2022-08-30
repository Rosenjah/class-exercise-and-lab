// Write a function to remove all duplciate letters from a provided string. The string will only contain lowercase letters between a - z. The string will not contain spaces.

// Write your solution below:

function remDups(str){
  let uniqueStr = ""

  for (let i=0; i < str.length; i++){
    if (uniqueStr.includes(str[i])){
      continue
    }else{
      uniqueStr += str[i]
    }
  }
  return uniqueStr
}


//other  ways to solve 
function makeUnique (str) {
  let strSet = new Set(str.split(``))
  return [...strSet].join(``)
}







const makeUnique = (str) => {
  let strArr = str.split("");
  let uniqArr = [];
  for (i = 0; i < strArr.length; i++) {
    if (uniqArr.includes(str[i]) === false) {
      uniqArr.push(str[i]);
      console.log(uniqArr);
    }
  }
  return uniqArr.join("");
};







const makeUnique2 = (str) => str.split('').filter(onlyUnique).join('')
const onlyUnique=(element, index, array)=> (array.indexOf(element) === index);







const makeUnique =(string) =>{
  let newArr =[];
  for(let i=0; i<string.length; i++)
  {
      if(!newArr.includes(string[i])){
          newArr.push(string[i])
      }
  }
  return console.log(newArr.join(""))
}







const makeUnique =(str) => console.log( [...new Set(str.split(""))].join(""))