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



// CLASS INHERITANCE (subclasses)

// subclasses extend another class
// subclasses are classes that inherit functionality and properties from another class
// subclasses can also have their own functionalities in addition to inherited functionality
// use 'extend' keyword 

class Admin extends User {

}

const userThree = new Admin('esme', 'esme@gmail.com')
// even with nothing in class Admin; this instance of 
// Admin class 'userThree' will have access to whatever 
// an instance of class User has. 
