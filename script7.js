//null, Objects and arrays of objects

console.log(Boolean(""));
console.log(Boolean("abc"));

var dog = {
    name: "Zoe",
    age: "10 years",
    numberOfLegs: 4,
    owner: null,
};

console.log(dog.name);
//Zoe

console.log(dog.age);
//10 years

//animal object, animal is the object
//the object has 4 property's
//the value of the property is "elephant", "grey" etc.
//left side is the "key" of the property

var animal = {
    type: "elephant",
    colour: "grey",
    numberOfLegs: 4,
    domesticated: false,
};

console.log(animal.type);
//elephant

console.log(animal.domesticated);
//false

var vehicle = {
    category: "car",
    colour: "red",
    numberOfWheels: 4,
    numberOfWings: null
}

console.log(vehicle);

//arrays of a product shown as a listing

var product1 = {
    id: 327,
    name: "Cotton Jacket",
    price: 100,
};

var product2 = {
    id: 968,
    name: "Silk jacket",
    price: 150,
};

console.log(product1, product2);

var products = [product1, product2];

console.log(products[1]);
console.log(products[1] === product2);

//We can loop through the array of objects like any other array, using a for loop or array prototype methods:

for (var i = 0; i < products.length; i++) {
    console.log(products[i]);
    console.log(products[i].name);
}

products.forEach(function (product, i) {
    console.log(product, i);
    console.log(product.name);
});

