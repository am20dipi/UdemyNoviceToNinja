# 'THIS' KEYWORD

* 'this' refers to the object in which it is used
* 'this' is a context object; meaning the value changes depending on where and when it is used


## Example

let user = {
    name: 'adri',
    age: 24,
    login: function(){
        console.log(this)
        // => 'this' refers to the user object and will output the user object
    }
}

console.log(this)
// => 'this' will output the global window object because 'this' references the global window object

