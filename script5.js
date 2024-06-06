//using Arrays
//var item1 = "bananas";
//var item2 = "a few frogs";
//var item3 = "some rats";

// hw to make the list using arrays

var shoppingList = ["bananas", "a few frogs", "some rats"];

console.log(shoppingList);

console.log("length:", shoppingList.length);

//add item to the array - push()
shoppingList.push("rat poison");

console.log(shoppingList);

//sort array  - sort(), sets the list alphabetically
console.log(shoppingList.sort());

var colours = ["red", "pink", "yellow"];

console.log(colours);

// add purple to the colours array
colours.push("purple");

console.log(colours);

//length property
console.log(colours.length);

var posts = ["I travelled to...", "Dear diary...", "My favourite sport is..."];

var newPost = "Today I wrote a blog post";

posts.unshift(newPost);
console.log(" " + posts)
// posts === ['Today I wrote a blog post', 'I travelled to...', 'Dear diary...', 'My favourite sport is...'];

//We use square brackets to access an item by its index:

var colours = ["red", "pink", "yellow"];

var firstItem = colours[0];

var colours = thirdItem = colours[2];

console.log(thirdItem + "," + firstItem);

//looping through arrays

var list = ["bananas", "a few frogs", "some rats", "rat poison"];

console.log(list);

var item = (list[0]);

console.log(item);

//for loops

for (var i = 0; i < 4; i++) {
    console.log(i);
}

//new example

var list = ["bananas", "a few frogs", "some rats", "rat poison"];

for (var i = 0; i < 4; i++) {
    
    console.log(i);
    var item = list[i];
    
    console.log(item);

}

//new example using len, len is dynamic in cases we do not know the length of a list

var list = ["bananas", "a few frogs", "some rats", "rat poison"];

var len = list.length;


for (var i = 0; i < len; i++) {
    
    //console.log(i);
    var item = list[i];
    
    console.log(item);

}

//example using len or length, if you add or remove a property this is "colours.length;" dynamic

var colours = ["pink", "red", "blue", "black"];

for (var i = 0; i < colours.length; i++) {

    console.log(colours[i]);
}

//example Array.forEach()

var colours = ["red", "pink", "yellow"];

colours.forEach(function (colour, index) {
    
    console.log(colour, index);
});

//example without Array.forEach() but with loop

var colours = ["red", "pink", "yellow"];

for (var index = 0; index < colours.length; index++) {
  
    var colour = colours[i];
}

    console.log(colour, index);


//example Array.find()

var colours = ["red", "green", "pink"];

var result = colours.find(function (colour) {
    return colour === "pink";
    });

    console.log(result);

//the same example using loop

var colours = ["red", "green", "pink"];
var result;

for (var i = 0; i < colours.length; i++) {
    var colour = colours[i];
    if (colour === "pink") {
        result = colour;
        break;
    }
}

console.log(result);

//example Array.filter()

var colours = ["red", "green", "pink"];

var result = colours.filter(function (colour) {
    return colour !== "pink";
});

console.log(result);
//["red", "green"]

//the same example using loop

var colours = ["red", "green", "pink"];
var result = [];

for (var i = 0; i < colours.length; i++) {
    var colour = colours[i];
    if (colour !== "pink") {
        result.push (colour);
    }
}

console.log(result);

//Array.sort()

var numbers = [1, 2, 3, 4, 10];

var result = numbers.sort(function (numberA, numberB) {

    return numberA < numberB;
});

console.log(result);
//[1, 2, 3, 4, 10]

