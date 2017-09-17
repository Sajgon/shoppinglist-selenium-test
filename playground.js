let GroceryList = require('./grocery-list');
process.on('unhandledRejection', r => console.log(r));

// Import the GroceryListTest class
// const GroceryListItem = require('./grocery-list-item');


// Tillåtna kategorier [Not in use]
// var itemCategories = ["Frukt", "Grönsak", "Kött", "Mejeriprodukt", "Krydda", "Övrigt"];
// En random tillåten kategori
// var randomItemCategory = itemCategories[Math.floor(itemCategories.length*Math.random())];


let a = new GroceryList('Första Listan');

let newItems = [
    { name: 'Öl', qt: 2, cat: 'Stuff' },
    { name: 'Saft', qt: 1, cat: 'Mat' },
    { name: 'Abba', qt: 20, cat: 'Musik' },
    { name: 'Saab', qt: 1, cat: 'Bil' }
];

newItems.map((item) => a.addItem(item.name, item.qt, item.cat));

a.addItem('Plommon', 120, 'Mat');
a.addItem('Väska', 120, 'Stuff');
a.addItem('Lingon', 120, 'Mat');


console.log(a);
