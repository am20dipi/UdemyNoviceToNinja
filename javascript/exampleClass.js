// EXAMPLE CLASS

class User {
    constructor(username, email){
        this.username = username
        this.email = email
    }
    login(){
        console.log(`${this.username} just logged in.`)
    }
    logout(){
        console.log(`${this.username} just logged out.`)
    }
}

const userOne = new User('adri', 'adri@gmail.com')
const userTwo = new User('dillon', 'dillon@gmail.com')

console.log(userOne, userTwo)
userOne.login()
userTwo.login()