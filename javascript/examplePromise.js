const getTodos = (resource) => {
    // instantiate new instance of Promise object
    // pass in params. resolve and reject
    return new Promise((resolve, reject) => {
        // instantiating new instance of XMLHttpRequest
        const request = new XMLHttpRequest()

        // appending event listener to request
        // user event === readystatechange
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200){
                // parsing data from JSON string to JS object
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4){
                reject('error')
            }
        })
        // initializing request; params: tells browser to retrieve (GET) data from specified resource
        request.open('GET', resource)
        // sending the request to the server
        request.send()
    })
}

// if request is resolved, the .then() method is called
// if request is rejected, the .catch() method is called
getTodos().then(data => {
    console.log('promise resolved: ', data)
}).catch(err => {
    console.log(`promise rejected: `, err)
})


// The XMLHttpRequest (XHR) object is used to interact with servers. 
// You can retrieve data from a URL without having to do a full 
// page refresh. This enables a Web page to update just part of a 
// page without disrupting what the user is doing.