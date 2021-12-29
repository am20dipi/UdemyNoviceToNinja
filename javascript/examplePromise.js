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
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4){
                reject('error')
            }
        })

        request.open('GET', resource)
        request.send()
    })
}

getTodos().then(data => {
    console.log('promise resolved: ', data)
}).catch(err => {
    console.log(`promise rejected: `, err)
})