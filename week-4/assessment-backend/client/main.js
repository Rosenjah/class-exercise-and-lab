const complimentBtn = document.getElementById("complimentButton");
const cookieBtn = document.getElementById("cookieButton");
const passwordBtn = document.getElementById("passwordButton");
const restaurantBtn = document.getElementById("restaurant-submit");
const goalRestaurant = document.getElementById("goal-restaurant");
const displaySection = document.getElementById("display-section");

const baseURL = `http://localhost:4000/api`;

const getCompliment = () => {
  axios.get(`${baseURL}/compliment/`)
    .then(res => {
      const data = res.data;
      alert(data);
    });
};

const getCookie = () => {
  axios.get(`${baseURL}/cookie/`)
    .then(res => {
      const data = res.data;
      alert(data);
    });
};

const getPassword = () => {
  axios.get(`${baseURL}/password/`)
    .then(res => {
      const data = res.data;
      alert(data);
    });
};

const getRestaurant = () => {
  displaySection.innerHTML = ``
  axios.get(`${baseURL}/restaurant?restaurantID=${goalRestaurant.value}`)
    .then(res => {
      console.log(res.data)
      displayRestaurant(res.data.county)
    })
    .catch(err => console.log(err))
};

const displayRestaurant = (county) => {
  const showRestaurant = document.createElement("h3")
  showRestaurant.textContent = county
  displaySection.appendChild(showRestaurant)
};

const postRestaurant = () => {
  const body = {
    restaurantName:restaurantNameInput.value,
    county:countyInput.value
  }
  axios.post(`${baseURL}/restaurant`,body)
    .then(res => {
      console.log(res.data)
      restaurantNameInput.value = ``
      countyInput.value = ``
      displayRestaurant(res.data.county)
      const newOption = document.createElement('option')
      newOption.textContent = res.data.restaurantName
      newOption.value = res.data.county
      restaurantID.appendChild(newOption)
    })
    .catch(err => console.log(err))
}

complimentBtn.addEventListener('click', getCompliment);
cookieBtn.addEventListener('click', getCookie);
passwordBtn.addEventListener('click', getPassword);
restaurantBtn.addEventListener('click', getRestaurant);
