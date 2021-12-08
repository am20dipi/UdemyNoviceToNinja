// LOOPS

// for loop

for (let i = 0; i < 5; i++){
    console.log(i)
}

// let i = 0; declare + assign variable i to begin at 0
// i < 5; conditional: while i is less than 5, do what is in the code block
// i++; increment i by 1

const array = [1, 2, 3]
for (let i = 0; i < array.length; i++){
    console.log(array[i])
}



// while loop

let i = 0
while (i < 5){
    console.log(i)
    i++
}

// this loop does virtually the same exact thing as the for loop above
// the syntax is different; while loops allow for break statements
// also, we increment i within the code block and declare + assign i outside of the while loop

const nums = [12, 43, 55]

let i = 0
while (i < nums.length){
    console.log(nums[i])
    i++
}



// do while loop

// an extension to the while loop; do while loops
// allow the code block to be run at least once in case the condition is never met 


let i = 5
do { 
    console.log(i)
    i++
} while (i < 5);

