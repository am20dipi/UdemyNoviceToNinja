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



// strings have METHODS
    // a method is a function associated with a specific data type

console.log(fullName.toUpperCase()) // => 'ADRIANA D.'
console.log(fullName.toLowerCase()) // => 'adriana d.'

    // ** these methods do not actually alter the original value.
    // but some methods do.

console.log(fullName.indexOf('d')) // => 1


let email = 'adriana@gmail.com'

let slicedResult = email.slice(0, 4) // => 'adri'
// slice: first arg is start point, second arg is end point
// so our output shows characters from index of 0 -> 4

let substringResult = email.substr(1, 3) // => 'dri'
// substr: first arg is start point, second arg is how many characters we want to retrieve
// so our output shows 3 characters starting from index of 1 

let replacedResult = email.replace('d', 'x') // => 'axriana@gmail.com'
// replace: replaces first arg with second arg; ONLY replaces first character; NOT REPETITIVE


