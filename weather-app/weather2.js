const cities = document.getElementById('cityInput')
const search = document.getElementById('search')
const result = document.getElementById('result')

async function getData() {
    const city = cities.value
    const response = await fetch("https://wttr.in/" + city + "?format=j1");

    const data = await response.json()
    console.log(data)
    
    const newData = await data.current_condition[0]
    console.log(newData);
    // result.textContent=loading
    const temperature = newData.temp_C
    const Humidity = newData.humidity

    if (result.innerHTML === "") {
        result.textContent = 'loading'
    } else {
        

    result.innerHTML=`<h2>Temperature : ${temperature}</h2>
                        <h2>Humidity : ${Humidity}</h2>`
    }
    cities.value = ""
}
// getData()


search.addEventListener('click', getData)