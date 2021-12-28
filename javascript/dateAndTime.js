// DATES + TIME 
    // Date and Time are objects in JS
    // Therefore, they are reference data types



// instantiating a new instance of the Date Object
const now = new Date()
console.log(now) // => will return lengthy date string
console.log(typeof now) // => will return 'object'

// Date Methods
now.getFullYear() // => 2021 
now.getMonth() // => 13 (position of the month; based on index in JavaScript) 
now.getDate() // => 28 (day of the month)
now.getDay() // => 2 (2 === Tuesday; based on index in JavaScript)
now.getHours() 
now.getMinutes()
now.getSeconds()