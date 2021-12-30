# LOCAL STORAGE

* Local Storage allows for the persisting of data. 

* Local Storage allows for storing and the retrieval of data. 

* Local Storage API is provided to us by the BROWSER! 

* Local Storage API is stored on the Window Object inside the browser. 

* Everything stored in Local Storage will turn into a string. 

### How to store data in localStorage

localStorage.setItem('name of key', 'value of key')


### How to retrieve data from localStorage

localStorage.getItem('name of key')

    * You will be returned the value of the key. 


### How to update data in localStorage

localStorage.setItem("name of key", "new value of key")

    * overrides existing value if key already exists.
    * if key does not already exist, it just creates a new key-value pair. 


### How to delete data from localStorage

Remove a single key-value pair:
    localStorage.removeItem("name of key")

Clears out all of localStorage:
    localStorage.clear()


### How to parse & stringify data 

Data stored in localStorage must be a string; so, we can take an array of data in JavaScript and use JSON.stringify(data) to convert it to valid JSON. 

* JSON is a good format to store data in localStorage.

Then, we can set the data using .setItem():

localStorage.setItem("name of array", JSON.stringify(name of array))

