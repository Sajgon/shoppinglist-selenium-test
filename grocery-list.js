let GroceryListItem = require('./grocery-list-item');

module.exports = class GroceryList {

    constructor(name) {

        if (typeof name !== "string" || name === "") {
            throw new Error("A list must have a name that is an non-empty string.");
        }

        this.name = name;
        this.items = [];
    }

    addItem(name, quantity, category) {

        // lägga till matvaror i sin shoppinglista.
        // namn, kvantitet och kategori (Grönsaker, Frukt etc), samt bought = false

        this.items.forEach(function(item){
            if(item.name == name){
                throw new Error("There's already an item with that name.");
            }
        });

        let newItem = new GroceryListItem(name, quantity, category);
        this.items.push(newItem);
    }

    removeItem(itemName) {
        // ta bort matvara i sin shoppinglista.

        let filteredArray = this.items.filter((item) => {
            return item.name.indexOf(itemName);
        });
    }

    buy(itemName) {
        // markera varor som köpta

    }

}
