//Arrays

//Q1 - Console log the 3rd item in this array.

var winningNumbers = [1, 76, 2, 78, 16, 7];

var result = winningNumbers.find(function (number) {
    return number === 2;
});

console.log(result);
//2

//or

var thirdItem = winningNumbers[2];
console.log(thirdItem);
//2

//Q2 - Add a new item to this array using the push method and console log the new amount of items.

var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

vegetables.push("cucumber");

console.log(vegetables);


//Q3 - Console log each item in this array using a for loop.

var randomThings = ["pumpkin", false, 23, true, "tomato"];

for (var i = 0; i < randomThings.length; i++) {
    var rand = randomThings[i];
    console.log(rand);
}

//Q4 - Loop through this array but only log the item if it is a number value.

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (var i = 0; i < moreThings.length; i++) {
    var typeOfItem = typeof moreThings[i];
    if (typeOfItem === "number") {
        console.log(moreThings[i]);
    }
}

//Q4 - Loop through this array but only log the item if it is a boolean value.

var moreThings = [14, "cat", false, 29, "fox", true, 34, 19];

for (var i = 0; i < moreThings.length; i++) {
    var typeOfItem = typeof moreThings[i];
    if (typeOfItem === "boolean") {
        console.log(moreThings[i]);
    }
}

//Q5 - Order this array alphabetically and then loop through it and log each item.

var ingredients = ["water", "flour", "toothpaste", "fish lips"];

var result = ingredients.sort();
    
    console.log(result);

//Q6 - Loop through this array and log every second item.

var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (var i = 0; i < characters.length; i++) {
    
    if (i % 2 === 1) {
        console.log(characters[i]);
    }
}