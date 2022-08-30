const fastFoodRestaurant = [
  {
    restaurantID: 1,
    restaurantName: "McDonald's",
    county: "Perez, 0010"
  },
  {
    restaurantID: 2,
    restaurantName: "Wendy's",
    county: "Toldi, 0080"
  },
  {
    restaurantID: 3,
    restaurantName: "Taco Bell",
    county: "Cinci, 0097"
  }
];

let globalID = 4;

module.exports = {

  getCompliment: (req, res) => {
    const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getCookie: (req, res) => {
    const cookies = ["Go take a rest; you deserve it.", "Happiness begins with facing life with a smile and a wink.", "If you continually give, you will continually have.", "How you look depends on where you go.", "If certainty were truth, we would never be wrong.", "In the end all things will be known.", "It takes courage to admit fault."];

    // choose random cookie
    let randomIndex = Math.floor(Math.random() * cookies.length);
    let randomCookie = cookies[randomIndex];

    res.status(200).send(randomCookie);
  },

  getPassword: (req, res) => {

    // generate random password
    const randomPassword = Math.random().toString(16).substr(2, 8);
    res.status(200).send(randomPassword);
  },

  getRestaurant: (req, res) => {
    // get restaurant
    const {restaurantID} = req.query;
    const restaurantPicked = fastFoodRestaurant.find((restaurant) => restaurant.restaurantID === restaurantID);
    return res.status(200).send(restaurantPicked);
  },

  postRestaurant: (req, res) => {
    // add restaurant
    const { restaurantName, county } = req.body;
    const newObj = {
      restaurantID: globalID,
      restaurantName,
      county,
    };
    fastFoodRestaurant.push(newObj)
    res.status(200).send(fastFoodRestaurant[fastFoodRestaurant.length-1])
  },

};
