console.log("This is script 2")

//Q1 - Create two number variables, one with an integer value and one with a decimal value.
var number1 = 1;
var number2 = 1.1;

console.log(number1)
console.log(number2)

//Q2 - Declare and initialise a variable with all the working days of the week separated by hyphens -.
var daysOfTheWeek = "Monday" + "-" + "Tuesday" + "-" + "Wednesday" + "-" + "Thursday" + "-" + "Friday";

console.log(daysOfTheWeek);

//Q3 - Create four variables that demonstrate the following operations:addition, subtraction, multiplication, division.
var addition = 2 * 2;

console.log(addition);

var subtraction = 2 - 2;

console.log(subtraction);

var multiplication = 2 + 2;

console.log(multiplication);

var division = 2 / 2;

console.log(division);

//Q4 - Declare a boolean variable with an initial value of false.
var dog = true;

console.log(dog);

//Q5 - Console log the number of characters in this string: "The frogs are angry."
var sentence = "The frogs are angry.";

console.log(sentence.length);

//Q6 - Convet the following variable names to camelCase: var time_elapsed; var totalprice;

var timeElapsed = "10" + " " + "sec";
var totalPrice = 10 + " " + "kr";

console.log(timeElapsed);
console.log(totalPrice);

//Q7 - Convert the following string values to number values: var number1 = "53"; var number2 = "44.6";
var number1 = "53";
var number2 = "44.6";

var convertInteger = parseInt(number1);
var convertDecimalNumber = parseFloat(number2);

console.log(number1);
console.log(number2);

//Q8 - Check the type of the following variables and log the results:
var pet = "donkey";
var age = 89;
var discountApplied = true;
var timeLeft;

var typeofPet = typeof pet;
console.log(typeofPet);
//string

var typeofAge = typeof age;
console.log(typeofAge);
//number

var typeofDiscountApplied = typeof discountApplied;
console.log(discountApplied);
//true

var typeofTimeleft = typeof timeLeft;
console.log(typeofTimeleft);
//undefined

//Q9 - Declare and initialise a variable with the value "Updating heading". 
//Select the h1 element on the page and set it's 
//inner HTML value to be the variable created above.
var headingText = "Updating heading";

var heading = document.querySelector("h1");
heading.innerHTML = headingText;

//Q10 - Select the body element on 
//the page and change its background colour to lightskyblue.
var section = document.querySelector("section");
section.style.backgroundColor = "lightskyblue";

//test1
var secondHeadingText = "test";
var heading = document.querySelector("h2");
heading.innerHTML = secondHeadingText;

//test2
var myNumber = 7;
var myString = "dog";

// is myNumber greater than 8?
console.log(myNumber > 8) // Output: False

// is myNumber less than or equal to 7?
console.log(myNumber <= 8) // Output: True

// is myString exactly equal to "dog"?
console.log(myString === "dog") // Output: True

// is myString not equal to "cat"?
console.log(myString !== "cat") // Output:  True