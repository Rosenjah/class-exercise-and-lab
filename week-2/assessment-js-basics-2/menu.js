///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays.
*/


//////////////////PROBLEM 1////////////////////
/*
    Create an object called `pizza` that has 6
    properties:
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

const pizza = {
    name: 'Rose',
    price: 20,
    category: 'appetizer/entree',
    popularity: 8,
    rating: 7,
    tags: ['gluten-free', 'kids'],
  };
  
  
  
  //////////////////PROBLEM 2////////////////////
  /*
      Let's print a few values from our pizza object.
  
      First, log the popularity of pizza.
      Use dot notation to access the value.
  */
  
  console.log('popularity of pizza: ' + pizza.popularity);
  
  
  /*
      Second, log the second tag in your pizza's
      tags array.
      Use a combination of dots and brackets to
      get the value.
  */
  
  console.log('pizza\'s tags: ' + pizza.tags);
  
  
  /*
      Third, destructure the price off of the
      pizza object.
  
      Print the value of your new price variable.
  */
  
  let { price: newPrice } = pizza;
  console.log('Pizza price: ' + newPrice);
  
  
  /*
      Fourth, and last, destructure the category
      property.
  
      Print the value of your category variable.
  */
  
  let { category: catProp } = pizza;
  console.log('Pizza price: ' + catProp + '\n');
  
  
  //////////////////PROBLEM 3////////////////////
  /*
      Create an array with about 5 objects in it.
      The objects should mimic the `pizza` object.
      Call the array `foodArr`.
  
      Make sure that they have slightly different
      values for price, popularity, rating, and
      tags. That way, you'll be able to use this
      data in some functions that you'll write.
  */
  
  const dairy = {
    name: 'Milk',
    price: 2,
    category: 'sides',
    popularity: 7,
    rating: 7,
    tags: ['instagood', 'love', 'delicious'],
  };
  
  const fruit = {
    name: 'Peaches',
    price: 10,
    category: 'grill',
    popularity: 8,
    rating: 7,
    tags: [ 'yum', 'chocolate', 'delivery'],
  };
  
  const cereal = {
    name: 'Quinoa',
    price: 30,
    category: 'mains',
    popularity: 6,
    rating: 3,
    tags: ['gluten-free', 'kids'],
  };
  
  const meat = {
    name: 'Tofu',
    price: 40,
    category: 'sweets',
    popularity: 9,
    rating: 3,
    tags: ['amazing', 'sweet', 'smile', 'chocolate'],
  };
  
  const vegetables = {
    name: 'Chickpeas',
    price: 50,
    category: 'soups',
    popularity: 3,
    rating: 1,
    tags: ['italianfood', 'healthylifestyle', 'yum'],
  };
  
  const foodArr = [dairy, fruit, cereal, meat, pizza, vegetables];
  
  
  //////////////////PROBLEM 4////////////////////
  /*
      Let's filter the food objects according
      to their tags.
  
      Write a callback function below that will
      return only food objects that have a certain tag.
  
      You can check for any tag that at least 1 of
      your food objects has.
  */
  
  //CODE HERE
  
  const filteredFood = foodArr.filter(function (e) {
    return e.tags.includes('yum');
  })
  console.log('filteredFood:');
  console.log(filteredFood);
  
  //////////////////PROBLEM 5////////////////////
  /*
      Now let's write a function that's a little
      more flexible than just filtering for one
      value. We want to be able to filter for
      food that has above a certain rating,
      below a certain price, or any other combo.
  
      Write a function called `filterByProperty`
      that takes in three arguments: `property`,
      `number`, and `type.
  
      The property will be a string (rating,
      popularity, or price)
  
      The number will be the number that you want
      to compare against
  
      The type should be 'above' or 'below' to
      indicate whether you want to get foods with
      values that are above or below the given number
      for the given property
  
      Inside the function, create a variable to hold
      a filtered array
  
      Use the filter method to filter the foodArr
  
          In the callback, check if the `type` is `above`,
          if it is, return objects whose value for the given
          property is greater than the `number` passed in
  
          If the type isn't `below`, return objects whose
          value for the given property is less than the
          `number` passed in
  
      Return the filtered array from the entire function
  */
  
  function filterByProperty(property, number, type) {
    let filteredFoodArr = foodArr.filter(function(e){
  
    });
  
    return filteredFoodArr;
  }
  
  
  /*
      Invoke the `filterByProperty` function passing
      in a value for each paramter.
  
      You'll have to console.log to see the filtered array
  */
  
  let filteredArr = filterByProperty('rating', 4, 'above');
  console.log(filteredArr);