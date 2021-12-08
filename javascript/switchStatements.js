// SWITCH CASE

const grade = 'D'

// pass in a variable as the arg
switch(grade){
    case 'A':
        console.log('Amazing.')
        break;
    case 'B':
        console.log('Good job!')
        break;
    case 'C':
        console.log('You need to study more.')
        break;
    case 'D':
        console.log('Try to do better next time.')
        break;
    case 'F':
        console.log('You failed.')
        break;
    default:
        console.log("I do not have your grade yet.")
}

// after each statement, implement a break statement.
// switch-case statements evaluate a variable.
// case statements use strict equality operators only. 
// default statement is if the variable does not match any of the implemented cases.