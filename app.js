process.on('unhandledRejection', r => console.log(r));

// Import the GroceryListTest class
let GroceryList = require('./grocery-list');
let GroceryListItem = require('./grocery-list-item');


// Tillåtna kategorier
var itemCategories = ["Frukt", "Grönsak", "Kött", "Mejeriprodukt", "Krydda", "Övrigt"];
// En random tillåten kategori
var randomItemCategory = itemCategories[Math.floor(itemCategories.length*Math.random())];

// Ola Test
let a = new GroceryList('Första Listan');
a.addItem('Beer', 1, 'Mat',);
a.addItem('Plommon', 120, 'Mat');
a.addItem('Väska', 120, 'Stuff');
a.addItem('Lingon', 120, 'Mat');
a.addItem('Abba', 1, 'Stuff');
a.addItem('Saab', 1, 'Stuff');
a.removeItem('Plommon');

// a.sortAlphabetical();

// console.log('***sorted', a.sortAlphabetical());
// console.log('***NOT sorted', a.items);

// process.on('unhandledRejection', r => console.log(r));
