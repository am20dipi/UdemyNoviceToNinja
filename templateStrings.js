const title = 'Best Reads Of 2021'
const author = "George"
const reviews = 30

// concatenation

let sentence = title + ' by' + author + ' has' + reviews + ' reviews.'
console.log(sentence)

// template string

let betterWay = `${title} by ${author} has ${reviews} reviews.`
console.log(betterWay)

// template strings can be used to create html templates in JS files
// template strings inject js code into HTML

let html = `
        <h2>${title}</h2>
    `