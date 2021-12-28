// DATES + TIME 
    // Date and Time are objects in JS
    // Therefore, they are reference data types



// instantiating a new instance of the Date Object
// the value of 'now' will be defined at the moment the Date object is invoked
const now = new Date()
console.log(now) // => will return lengthy date string
console.log(typeof now) // => will return 'object'

// Date Methods
now.getFullYear() // => 2021 
now.getMonth() // => 13 (position of the month; based on index in JavaScript) 
now.getDate() // => 28 (day of the month)
now.getDay() // => 2 (2 === Tuesday; 1 === Monday; 0 === Sunday based on index in JavaScript)
now.getHours() 
now.getMinutes()
now.getSeconds()


// Timestamps
now.getTime()
now.toDateString()  // => Tues Dec 28 2021
now.toTimeString()  // => Time + Timezone
now.toLocaltring()  // => 12/28/2021, 14:41:41