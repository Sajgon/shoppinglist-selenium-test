// Import the GroceryListTest class
let GroceryList = require('./grocery-list');
let GroceryListTest = require('./grocery-list-item');


// Tillåtna kategorier
let categories = ["Frukt", "Grönsak", "Kött", "Mejeriprodukt", "Krydda", "Övrigt"];


// Make own tests

let a = new GroceryList('Första Listan');
a.addItem('Nötfärs', 'Matvaror att köpa', 2);

console.log(a);
