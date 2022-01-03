// SETS IN JAVASCRIPT

    // Set is a JavaScript Object
    // Set uses the new keyword as a built-in constructor
    // Sets do NOT allow duplicates!!!

const names = ['adri', 'dillon', 'koko', 'cosmo']
const nameSet = new Set(names)
// => this will return a Set with the names. It does not return an array. 

const uniqueNames = [...new Set(names)]
// => this will return the Set as an ARRAY.


// Sets have their own unique properties and methods compared to Arrays

const ages = new Set()
ages.add(20)
ages.add(30)
console.log(ages)
// => this will return { 20, 30 }
ages.delete(20)
// => this will return { 30 }
ages.size()
// => this will return 1
// => this is like .length() used for arrays
ages.has(20)
// => this will return a boolean
// => in our case, this will return false because '20' does not exist in ages

