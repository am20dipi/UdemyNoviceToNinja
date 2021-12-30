# LOCAL STORAGE

* Local Storage allows for the persisting of data. 

* Local Storage allows for storing and the retrieval of data. 

* Local Storage API is provided to us by the BROWSER! 

* Local Storage API is stored on the Window Object inside the browser. 

* Everything stored in Local Storage will turn into a string. 

## How to store data in localStorage

localStorage.setItem('name of key', 'value of key')


## How to retrieve data from localStorage

localStorage.getItem('name of key')

* You will be returned the value of the key. 


## How to update data in localStorage

localStorage.setItem("name of key", "new value of key")

* overrides existing value if key already exists.
* if key does not already exist, it just creates a new key-value pair. 