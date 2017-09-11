// Import the GroceryListTest class
let GroceryList = require('./grocery-list');
let GroceryListTest = require('./grocery-list-item');


// Tillåtna kategorier
var itemCategories = ["Frukt", "Grönsak", "Kött", "Mejeriprodukt", "Krydda", "Övrigt"];
// En random tillåten kategori
var randomItemCategory = itemCategories[Math.floor(itemCategories.length*Math.random())];

// Make own tests
let a = new GroceryList('Första Listan');
a.addItem('Punk IPA', 1, 'Matvaror att köpa',);
a.addItem('Plommon', 120, 'Matvaror att köpa');
a.addItem('Väska', 120, 'Saker att köpa');
a.removeItem('Punk IPA');

console.log(a);

//a.addItem('Päron', 'Frukt', 4);
//a.addItem('Is', randomItemCategory, 5);

