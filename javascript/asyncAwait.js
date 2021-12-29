// ASYNC + AWAIT

// both allow us to chain Promises ...
// ... together in a more clean and readable way

// async function
    // everytime we call async function, we are returned a Promise!
    // async functions are NON-BLOCKING
const getMovies = async () => {

    // await keyword stalls JS -- it stops it from assigned a value to the response variable
    // until the Promise has resolved
    const response = await fetch('http://example.com/movies.json')
    console.log(response)

    // since .json() returns a Promise, we need to use await again
    const data = await response.json()
    //console.log(data)
    return data
}

getMovies()
    .then((data) => {
        console.log('resolved: ', data)
    })
    .catch((error) => {
        console.log('rejected: ', error.message)
    })

