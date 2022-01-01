// EXAMPLE CLASS

class User {
    constructor(username, email){
        this.username = username
        this.email = email
        this.score = 0
    }
    login(){
        console.log(`${this.username} just logged in.`)
    }
    logout(){
        console.log(`${this.username} just logged out.`)
    }
    increaseScore(){
        this.score++
        console.log(`${this.score}`)
        return this
    }
}

const userOne = new User('adri', 'adri@gmail.com')
const userTwo = new User('dillon', 'dillon@gmail.com')

console.log(userOne, userTwo)
userOne.login()
userTwo.login()


// HOW TO CHAIN METHODS

// in order to chain methods, you must return 'this' within the method!!
// returning 'this' is returning the instance of the user object the methods are called on. 


