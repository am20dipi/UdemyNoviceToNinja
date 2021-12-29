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
    })
    // for rejected
    .catch((err) => {
        console.log(err)
    })
