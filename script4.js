//for loop

for (var i = 1; i <= 5; i++) {
    console.log(i);
}

for (var count = 1; count <=5; count++) {
    console.log(count);
}

//1- declare a counter variable (i, stands for integer)
//2- then it is a condition (count <= 5) that needs to be true, in order to execute the method (console.log())
//for (counter variable; condition; incrementation of counter variable) {
//}

var i = 0;

for(i; i< 5; i++) { //keeps going as long as i is less than 5 starting from 0
    console.log(i);
}

//common writing is:
for (var i = 0; i < 5; i++) {
    console.log(i);
}

//or you can change the variable to count
for (var count = 0; count < 5; count++) {
    console.log(count);
}

//Lesson task 4
//Q1- Write a loop that logs the numbers 0 to 7.

for (var count = 0; count <= 7; count++) {
    console.log(count);
}

//Write a loop that logs the numbers 10 to 1. Count down from 10 to 1.

for (var count = 10; count > 0; count--) {
    console.log(count);
}

//Write a loop that counts from 10 to 20, and log only the odd numbers. 11, 13, 15, etc

for (var count = 10; count <= 20; count++) {
    if (count % 2 !== 0)
    console.log(count);
}