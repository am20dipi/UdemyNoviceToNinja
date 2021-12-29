# PROMISES

* A Promise in JavaScript is an Object.
    * We can instantiate new instances of Promise using the 'new' keyword. 
* A Promise takes some time to do and it leads to either one of two outcomes: (1) resolved or (2) rejected.

* A Promise function has two (2) parameters: resolve and reject. 

* We pass the data to the resolve() function if the request is successful. 
    * When we resolve something in a Promise we fire the callback function in the .then() method. 
    * We pass in the data from the resolve() method. 
* OR we pass an error to the reject() function if the request is NOT successful. 
    * Second callback function in the .then() function is called when the Promise is rejected. 


