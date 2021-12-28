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
    