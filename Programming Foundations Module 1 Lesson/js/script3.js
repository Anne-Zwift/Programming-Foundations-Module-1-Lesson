var isLoggedIn = false;

if (isLoggedIn === true) {
    console.log("Logged in");
}
else {
    console.log("NOT Logged in");
}

//check if the number is > greater than
var total = 50;

if(total > 60) {
    console.log("This is expensive");
}
else {
    console.log("Not expensive")
}

// check if the guessNumber is equal to the number
var answer = 8;
var guessNumber = 10;

if(guessNumber === answer) {
    console.log("correct guess");
}
else {
    console.log("Not equal");
}

//check if the value of the letterGrade should be
var grade = 6;
var letterGrade;

if(grade === 10) {
    letterGrade = "A";
}
else if (grade === 9) {
    letterGrade = "A";
}
else if (grade === 8) {
    letterGrade = "B";
}
//if none of the above is true then
else {
    letterGrade = "Unknown";
}

//use of switch

switch(grade) {
    case 10:
    case 9:
    letterGrade = "A";
    break;//this will exit the code
    case 8:
        letterGrade = "B";
        break;
    case 7:
        letterGrade = "C";
        break;
    default:
        letterGrade = "Unknown"
}

console.log(letterGrade);

// = assignment operator
// === comparison operator

var colour = "red";
var colourType;

if(colour === "red") {
    colourType = "A"
}
else if (colour === "blue") {
    colourType = "None"
}
else if (colour === "green") {
    colourType = "Green"
}

console.log(colourType);


//Lesson Task 3 Questions

//Q1 - write an if statement that checks whether firstNumber is smaller than secondNumber. 
//If it is, log the message "The first number is smaller than the second".

var firstNumber = 34;
var secondNumber = 89;

if(firstNumber < secondNumber) {
    console.log("The first number is smaller than the second");
}

//Q2 - write code that checks whether age meets the minimumAge requirement. 
//Log a message if it passes the test and use an else block to log a message if it doesn't.

var age = 11;
var minimumAge = "13";

if(age >= parseInt(minimumAge)) {
    console.log("correct age");
}
else {
    console.log("incorrect");
}

//Q3 - write code that checks whether income meets the maximumIncome requirement. 
//Log a message if it passes the test and use an else block to log a message if it does not.

var income = "11.050";
var maximumIncome = "13.075";

if(income <= parseFloat(maximumIncome)) {
    console.log("meets the maximumIncome");
}
else {
    console.log("does not meet the maximumIncome");
}

//Q4 - Fix this code: 
//var colour = "blue"; 
//if ((colour = "orange")) 
//{ console.log("This colour is a bit rubbish");
//}

var colour = "blue";

if(colour === "orange") {
    console.log("This colour is a bit rubbish");
}

//Q5 - write code that logs the message "Not paid" if the invoice has not been paid.

var invoicePaid = false;

if(invoicePaid === false) {
    console.log("Not paid");
}

//Q6 - write code that checks if the winning number hasn't been selected. 
//If it hasn't, log the message "You lose again". Use the strict inequality operator.

var selectedNumber = 11;
var winningNumber = "15";

if(selectedNumber !== parseInt(winningNumber)) {
    console.log("You lose again");
}

//Q7 - write a switch statement that log the weekday name depending on the value of dayOfTheWeek. 
//If dayOfTheWeek is 1, log "Monday", if it is 2 log "Tuesday".
//If the dayOfTheWeek is not a number between 1 and 7, log the message "Invalid day number".

var dayOfTheWeek = 2;
var dayName;

switch(dayOfTheWeek) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break
    case 3:
        dayName = "Wednesday";
        break
    case 4:
        dayName = "Thursday";
        break
    case 5:
        dayName = "Friday"
        break
    case 6:
        dayName = "Saturday";
        break
    case 7:
        dayName = "Sunday";
        break
    default:
        dayName = "Invalid day number"
}

console.log(dayName);