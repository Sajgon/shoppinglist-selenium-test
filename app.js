// Import the GroceryListTest class
let GroceryList = require('./grocery-list');
let GroceryListItem = require('./grocery-list-item');


// Tillåtna kategorier
var itemCategories = ["Frukt", "Grönsak", "Kött", "Mejeriprodukt", "Krydda", "Övrigt"];
// En random tillåten kategori
var randomItemCategory = itemCategories[Math.floor(itemCategories.length*Math.random())];

// Ola Test
let a = new GroceryList('Första Listan');
a.addItem('Punk IPA', 1, 'Mat',);
a.addItem('Plommon', 120, 'Mat');
a.addItem('Väska', 120, 'Stuff');
a.addItem('Lingon', 120, 'Mat');
a.addItem('Abba', 1, 'Stuff');
a.addItem('Saab', 1, 'Stuff');
a.removeItem('Plommon');

a.sortAlphabetically();

console.log(a);



//a.addItem('Päron', 'Frukt', 4);
//a.addItem('Is', randomItemCategory, 5);

