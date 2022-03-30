//ASSIGNMENT 
//1. Write a javascript function that reverse a number.
function reverseNumber(number) {
    reverse = 0;
    while (number > 0) {
        remainder = number % 10;
        reverse = (reverse * 10) + remainder;
        number = Math.floor(number / 10);
    }
    return reverse;
}
console.log(reverseNumber(9283928));

//2. Write a javascript function which accepts and argument and returns the type.
function typeReturner(input) {
    result = []
    for (var i of input) {
        result.push(typeof(i));
    }
    return result
}
const input = [3, 'stephen', true, Symbol('@')];
console.log(typeReturner(input));

//3. Write a javascript program to pass a 'javascript function' as a parameter.
function displayDetails(firstName) {
    firstName();
}

function getFirstName() {
    const name = prompt("Enter your first name: ");
    console.log(`My name is ${name} and i am 20 years old.`);
}
displayDetails(getFirstName);

//4. Write a javascript function to get the function name
function funcName() {
    console.log(arguments.callee.name);
}
funcName();