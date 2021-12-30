const key = '7P9yAWDrDjtxBb3Oj1mOAYojpTKURpx2'

// get weather info

const getWeather = async (id) => {
    
    const endpoint = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`

    const response = await fetch(endpoint + query)
    const data = await response.json()
    return data[0]
}


// get city key
const getCity = async (city) => {
    
    const endpoint = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(endpoint + query)
    const data = await response.json()
    return data[0]

}

getCity('manchester')
    .then((data) => {
        return getWeather(data.Key)
    }).then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error.message)
    })

