// STEP 1: Grab the three things on the page we need to work with.
// getElementById finds an HTML element by its id.
const cityInput = document.getElementById("city");
const button = document.getElementById("btn");
const result = document.getElementById("result");

const cityText = document.getElementById("city-text");
const tempText = document.getElementById("temp-text");
const weatherText = document.getElementById("weather-text");
const humidityText = document.getElementById("humidity-text");
const pressureText = document.getElementById('pressure')
const loadingText = document.getElementById("loading");


// STEP 2: Write a function that gets the weather.
function getWeather() {

  // Read what the user typed into the box.
  const city = cityInput.value;

  // The web address of the weather service, with the city added on the end.
  const url = "https://wttr.in/" + city + "?format=j1";

  // Tell the user we are working on it, and stop them clicking again.
  //   button = button.disabled
  //  loadingText.innerText = 'Loading...'
  button.disabled = true
  loadingText.innerText = 'Loading...'


  // fetch() asks the internet for data. It gives back a "promise":
  // a promise that the answer will arrive LATER.
  // .then() says: "when the answer arrives, run this next."
  fetch(url)

    .then(function (response) {

      return response.json()
      console.log(response);
      console.log(response.json());


    })
    // First .then(): the reply has arrived.
    // .json() turns it into a JavaScript object we can use.

    // console.log(response.json()); // for debugging

    .then(function (data) {

      console.log(data)
      console.log(data.current_condition[0].humidity)
      console.log(data.current_condition[0].weatherDesc[0].value)
      console.log(data.current_condition[0].pressure)
      console.log(data.current_condition[0].temp_C)

      const now = data.current_condition[0]
      const humidity = now.humidity
      const weatherDesc = now.weatherDesc[0].value
      const pressure = now.pressure
      const temperature = now.temp_C

  cityText.textContent = city
  tempText.textContent = `Temperature: ${temperature} c`
  weatherText.textContent = `Weather: ${weatherDesc}`
  humidityText.textContent = `Humidity: ${humidity}`
  pressureText.textContent = `Pressure: ${pressure}`


    })
  // Second .then(): the data is ready.
  // Pick out the parts we want and show them on the page.

  
  // result.innerHTML =
  // "<p>Humidity: " + humidity + "%</p>";
  // "<p>Weather: " + weatherDesc + "</p>" +
  // "<h2>" + pressure + "</h2>" +
  // "<p>Temperature: " + temperature + "°C</p>" 


  // .catch(): runs if ANYTHING above went wrong
  // (bad city name, no internet...).

  .catch(function(error){
    result.textContent = 'Sorry, couldn\'t get weather info' 
  })

  // .finally(): runs at the very end, whether it worked or failed.
  // We use it to turn the button back on.

  .finally(function(){
    loadingText.innerText = ''
    button.disabled = false
  })

}


// STEP 3: Run getWeather() when the button is clicked.
button.addEventListener("click", getWeather);
