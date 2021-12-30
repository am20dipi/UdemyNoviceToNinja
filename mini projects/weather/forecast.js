const key = '7P9yAWDrDjtxBb3Oj1mOAYojpTKURpx2'




const getCity = async (city) => {
    
    const endpoint = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(endpoint + query)
    const data = await response.json()
    console.log(data[0])

}

getCity('manchester')