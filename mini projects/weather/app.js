// DOM manipulation

const cityForm = document.querySelector('form')


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
            console.log(data)
        })
        .catch((error) => {
            console.log(error.message)
        })
})