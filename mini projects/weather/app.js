// DOM manipulation

const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')



const updateUI = (data) => {

    const cityDetails = data.cityDetails
    const weather = data.weather

    // update details template
        // city name, weather, temperature
    details.innerHTML = `
        <h5 class="my-3 city">${cityDetails.EnglishName}</h5>
        <div class="my-3 condition">${weather.WeatherText}</div>
        <div class="display-4 my-4 temperature">
            <span>${weather.Temperature.Imperial.Value}</span>
            <span>&deg;F</span>
        </div>
    `

    // remove display:none class
    if (card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

}

const updateCity = async (city) => {
    // store responses from our async functions (located in forecast.js)
    // .. in variables
    const cityDetails = await getCity(city)
    const weather = await getWeather(cityDetails.Key)

    // we return the new object with two properties: cityDetails and weather
    return {
        cityDetails: cityDetails,
        weather: weather
    }
}

// event listener on form; user event = submit
cityForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // get value of input
    const city = cityForm.city.value.trim()
    cityForm.reset()

    // update the UI with the city 
    // when the promise resolves or rejects
    updateCity(city)
        .then((data) => {
            updateUI(data)
        })
        .catch((error) => {
            console.log(error.message)
        })
})