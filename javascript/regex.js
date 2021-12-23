// REGEX
    // regular expressions
    // matching patterns -- used to check if input matches requirements
    // regexes can tell us how long an input should be, what characters are required, what characters are not allowed...
    // used often for validation, passwords, email signup

// $
    // nothing after it
    // asserts position at end of the line

// ^ 
   // nothing before it
   // asserts position at start of a line

// character set []
    // [a-z] only allows for a single char between a and z
    // [a-z A-Z] only allows for a single char uppercase or lowercase
    // [a-z A-Z](6,10) only allows for input between 6 and 10 chars long
    // [a-z 0-9] allows for nums + letters

// min-max (){}
    // {6,} min of 6 chars -- no max
    // (5, 12) atleast 5 chars and no more than 12
    // {,100} max of 100 chars

// g
    // global modifier -- all matches?

// .
    // . before length requirement allows for ANY character including symbols, punctuation...
    // /^.(5, 12)$




// EXAMPLE

const form = document.querySelector('.signup-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(form.username.value)
})

const username = 'shaun'
const pattern = /^[a-z]{6,}$/
// any lowercase letters, min of 6 chars long -- no max. 
// nothing precedes or succedes it


// calling .test() on pattern and passing in the username
// .test() returns true or false
// if passes the regex test, returns true; otherwise returns false
let result = pattern.test(username)

// calling .search() on username to search for the pattern
// this will return an integer: the index of where the pattern occurs
// it will return -1 if pattern does not exist in the input
let result2 = username.search(pattern)