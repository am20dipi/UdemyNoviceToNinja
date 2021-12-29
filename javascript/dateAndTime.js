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
now.getTime() // => time in milliseconds
now.toDateString()  // => Tues Dec 28 2021
now.toTimeString()  // => Time + Timezone
now.toLocalString()  // => 12/28/2021, 14:41:41


// Comparing times
const before = new Date('December 28 2021 7:30:59')
const now = new Date()
console.log(now.getTime(), before.getTime())


const difference = now.getTime() - before.getTime()
console.log(difference)
    //convert to minutes, hours, days ...
const minutes = Math.round(difference/ 1000 / 60)
console.log(minutes)

const hours = Math.round(minutes / 60)
console.log(hours)

const days = Math.round(hours / 24)
console.log(days)

// converting timestamp into date object
const timestamp = 167593847990
console.log(new Date(timestamp))



