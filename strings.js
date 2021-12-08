// STRINGS

console.log('hello')

let myName = "Adriana"
console.log(myName)

// string concatenation
    // concatenation: joining strings together
    // use the plus sign (+) to concatenate strings

let firstName = "Adriana"
let lastName = "D."

let fullName = firstName + " " + lastName
console.log(fullName)

// using bracket notation to retrieve characters based on index

console.log(fullName[0])
    // => 'A'


// string length
    // finding how many characters are in a string ==> returns an integer
console.log(fullName.length)



// strings have methods
    // a method is a function associated with a specific data type

console.log(fullName.toUpperCase()) // => 'ADRIANA D.'
console.log(fullName.toLowerCase()) // => 'adriana d.'

    // ** these methods do not actually alter the original value.
    // but some methods do.

console.log(fullName.indexOf('d')) // => 1