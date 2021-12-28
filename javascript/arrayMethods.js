// FILTER()

    // iterates through the array
    // fires a callback function for each item in the array
    // checks each array item with a condition; if it passes the check, the array item remains in the array
    // if it does not pass the check, it is removed from the array
    // the condition should evaluation to either TRUE or FALSE
    // filter() is NON-DESTRUCTIVE -- so we must store .filter() in a variable

    const scores = [10, 20, 30, 40, 50]

    const filteredScores = scores.filter(() => {
        return score > 20
    })
    console.log(filteredScores)
    // returns [30, 40, 50]


// MAP()

    // takes an array and iterates through it
    // fires a callback function for each item in the array
    // creates an updated value for each array item and pushes it in a new array
    // returns the new array
    // map() is NON-DESTRUCTIVE -- so we must store it in a variable

    const prices = [20, 25, 27, 44, 54]

    const salePrices = prices.map((price) => {
        return price * 0.50
    })
    console.log(salePrices)
    

    const products = [
        {name: 'gold', price: 20},
        {name: 'green', price: 20},
        {name: 'blue', price: 40}
    ]

    const saleProducts = products.map((product) => {
        if (product.price > 30){
            return {name: product.name, price: product.price / 2}
        } else{
            return product
        }
    })


// REDUCE()

    // iterates through the array
    // fires a callback for each array item
    // takes in two (2) args: accumulator (acc) and current (curr)
    // does not return a new array
    // returns a single value based on the condition

    const cats = [4, 44, 64, 21]

    const reducedCats = cats.reduce((acc, curr) => {
        if (curr > 50){
            acc++
        }
        return acc
    }, 0)

    console.log(reducedCats)
    // should return 1 because only 1 cat is greater than 50



// FIND()

    // iterates through an array
    // fires a callback for each array item
    // returns the first item that meets the condition
    // stops firing callback function once condition is met 

    const nums = [20, 30, 12, 50, 17]

    const findNum = nums.find((num) => {
        return num > 25
    })
    console.log(findNum)
    // should return 30 because it is the first array item that is greater than 25


// SORT()

    // iterates through an array / an object
    // fires a callback for each array item / instance of an object
    // sort() is DESTRUCTIVE -- does not need to be stored in a variable
    // sort() called on numbers will sort them by the first digit -- unless specified

    const names = ["koko", 'cosmo', 'charles', 'zoie', 'mindy']

    names.sort()
    // returns an alphabetical, modified version of names


    
    // using sort() for an object needs to be passed a callback as an argument
    const players = [
        {name: 'mario', score: 20},
        {name: 'luigi', score: 30},
        {name: 'adri', score: 25},
        {name: 'dillon', score: 40},
    ]

    // checking to see if score of first instance of object is greater than next instance
    // swapping the order to return players sorted by highest score
    players.sort((a,b) => {
        if (a.score > b.score){
            return -1
        } else if (b.score > a.score){
            return 1
        } else {
            // if a === b
            return 0
        }
    })

