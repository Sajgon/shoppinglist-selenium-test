// Import the GroceryListTest class
let GroceryList = require('./grocery-list');
let GroceryListTest = require('./grocery-list-item');


// Tillåtna kategorier
var itemCategories = ["Frukt", "Grönsak", "Kött", "Mejeriprodukt", "Krydda", "Övrigt"];
// En random tillåten kategori
var randomItemCategory = itemCategories[Math.floor(itemCategories.length*Math.random())]; 

// Make own tests
let a = new GroceryList('Första Listan');
a.addItem('Nötfärs', 'Matvaror att köpa', 2);
//a.addItem('Päron', 'Frukt', 4);
//a.addItem('Is', randomItemCategory, 5);

console.log(a);
