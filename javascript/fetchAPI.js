// FETCH API

// fetch returns a PROMISE
// fetch takes an endpoint as a parameter
// then => resolved
// catch => rejected
// these Promise methods can be chained together

fetch('http://example.com/movies.json')

   // for resolved
    .then((response) => {
        console.log(response)
        // .json() parses the response data for us
        // this will return a PROMISE!
        return response.json()
    })
    // chain another .then() to response.json() since it returns a Promise
    // pass in the data and paste it to the console
    .then((data) => {
        console.log(data)
    })
    // for rejected
    .catch((err) => {
        console.log(err)
    })
