class Forecast{
    constructor(){
        this.key = '7P9yAWDrDjtxBb3Oj1mOAYojpTKURpx2'
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/'
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    }
    async updateCity(city){
        // store responses from our async functions (located in forecast.js)
        // .. in variables
        const cityDetails = await this.getCity(city)
        const weather = await this.getWeather(cityDetails.Key)

        // we return the new object with two properties: cityDetails and weather
        return {
            cityDetails: cityDetails,
            weather: weather
        }
    }

    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`

        const response = await fetch(this.cityURI + query)
        const data = await response.json()
        
        return data[0]
    }

    async getWeather(id){
        const query = `${id}?apikey=${this.key}`

        const response = await fetch(this.weatherURI + query)
        const data = await response.json()
        
        return data[0]
    }
    
}