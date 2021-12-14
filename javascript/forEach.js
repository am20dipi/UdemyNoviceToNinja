// callback functions using .forEach()

// declaring + assiging 'fruit' to an array of strings
const fruit = ['cherry', 'mango', 'pear']

// creating an arrow function that takes in a fruit and an index
// console logging the a string literal with the index followed by the fruit

const logFruit = (fruit, index) => {
    console.log(`${index} -- ${fruit}`)
}

// instead of looping through the array of fruit within the function
// we callback logFruit by passing it to the .forEach() method

fruit.forEach(logFruit)

// our output:
    // 0 -- cherry
    // 1 -- mango
    // 2 -- pear


// callback functions -- functions we pass to another function (or method) as an argument


// using .forEach() to create DOM elements



const ul = document.querySelector('.people')

const people = ['mario', 'luigi', 'princess peach', 'toad', 'yoshi']

let html = ``

people.forEach = (person) => {
    html += `<li style="color: purple">${person}</li>`
}

ul.innerHTML = html