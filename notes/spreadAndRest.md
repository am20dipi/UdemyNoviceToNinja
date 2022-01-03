# SPREAD OPERATOR

* Use it to spread out array into its individual components. 

Example:

`const people = ['adri', 'dillon', 'koko']`
`console.log(...people)`

* This will return each array item of the array 'people'.

Now we can use array "people" into a new array:

`const members = [...people, 'mario', 'jack']`

* This will add the additional people. 


# REST PARAMETER

* Its purpose is to bundle up arguments into a single parameter. 
* It allows a function to accept an indefinite number of arguments as an array.
* Syntax: (...params)

Example:

`const double = (...nums) => {
    // do something
    return nums.map(num => num*2)
}`

`double(5, 4, 22, 6, 777, 8, 92, 10000, 88, 65, 56)`

* No matter how many nums are passed in, the function will run and execute whatever is in the code block to each num. 

