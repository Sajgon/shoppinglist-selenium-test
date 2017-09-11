// Import the GroceryListTest class
let GroceryList = require('./grocery-list');
let GroceryListTest = require('./grocery-list-item');


// Make own tests

let a = new GroceryList('Första Listan');
a.addItem('Nötfärs', 'Matvaror att köpa', 2);

console.log(a);
