// ARRAYS

const ninjas = ['Dillon', 'Adri', 'Charles']

// access individual array items using bracket notation indexing
const firstNinja = ninjas[0]
console.log(firstNinja) // => 'Dillon'

// length of the array === how many array items
const length = ninjas.length
console.log(length) // => 3

// turn array into string using .join()
// .join() can take in an arg; whatever u want to separate the array items with in the string
const string = ninjas.join(' ,')
console.log(string) // => Dillon, Adri, Charles

// retrieving the index of an array item
const index = ninjas.indexOf('Adri')
console.log(index) // => 1

// concatenating two or more arrays using .concat()

let concatenateArrays = ninjas.concat(['hi', 'there'])
console.log(concatenateArrays) // => ['Dillon', 'Adri', 'Charles', 'hi', 'there']

// .push(value) -- destructive; alters original value
// adds value passed in to the end of the array
// returns the length of the new modified array


// .pop() -- destructive; alters original value
// removes last array item of the array
// returns the value "popped" off the array


// .shift()

// .unshift(value)

// .slice(start, endpoint)

// .splice(index, how many)