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

