// Variable Lesson
var age = 21;

var firstname = "Dink Kao"
var lastname = "Code"
var online = true;
var whatever = null;

age = age + 1;
var fullname = firstname + lastname;

console.log("your age is",age)
console.log("Hello",fullname)
console.log("Are you online?:",online)
console.log(whatever)

let mysweetvariabble = 420;

const pi = 3.14159;

//arithmetic expressions
var friends = 10;
friends = friends + 1;
console.log("I have " +friends +" friends")

friends += 1;
friends -= 1;
friends *= 2;

console.log(friends)



//user input

// var myName = window.prompt("What is your name?");
// console.log("Hello",myName);
document.getElementById("myButton").onclick = function() {
    var myName = document.getElementById("myText").value;
    console.log("Hello",myName);
}


/* Type of conversion of numbers, strings, booleans
Explicit vs Implicit
Change the datatype of a value to another */

    // var age = window.prompt("Enter your age");
    // console.log("Happy Birthday")

    // age = Number(age);
    // age += 1;
    // console.log(typeof age);
    // console.log(age);

    // var myVar = Number(3.14);
    // var myVar = String(3.14);
    myVar = Boolean(undefined);

    console.log(typeof myVar);
    console.log(myVar);


/* Function */
function sayHello() {
    console.log("Hello");
};

var myName = "Bro";