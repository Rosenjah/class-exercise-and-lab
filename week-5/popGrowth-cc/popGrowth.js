// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

//the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

function nbYear(p0, percent, aug, p) {
  // Initialise array.   
	var finalCatch = [];
  // Early conversion.
  var percent = percent / 100;
	// Looping through.
  for(var p0; p0 < p; p0+=p0*percent+aug) {
		currValue = p0 + p0 * percent + aug;
		finalCatch.push(currValue);
	}
  
	return finalCatch.length;
}

// other solutions

function nbYear(p0, percent, aug, p) {
  for (var y = 0; p0 < p; y++) {
      p0 = p0 * (1 + percent / 100) + aug;
  }
  return y;
}

const nbYear = (start_pop, growth_percent, inhab_change, goal_pop) => {
  let percent = (growth_percent/100)
  let final_pop = 0
  let year_count = 0
  for(let i = 0; final_pop < goal_pop; i++ ){
      final_pop = start_pop + (start_pop* percent) + inhab_change
      start_pop=final_pop
      year_count++
  }
  return year_count
}

console.log(nbYear(1000,2,50,1200))


nbYear = (p0, p100, aug, p) => {
  const rate = p100/100 + 1;
  let n;
  let pop;
  for (n = 0, pop = p0; pop < p; n++) {
      pop = ~~(pop * rate + aug);
  }
  return n;
}
console.log(nbYear(1500, 5, 100, 5000))

const nbYear = (p0, percent, aug, p) => {
  let i = 0
  while (p0 < p){
    i++
    p0 = p0 + (p0 * (percent/100)) + aug
  } return i
} 

console.log(nbYear(1500, 5, 100, 5000))
console.log(nbYear(1500000, 2.5, 10000, 2000000))