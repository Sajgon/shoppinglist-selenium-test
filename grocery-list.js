module.exports = class GroceryList {

    constructor(name) {

        if (typeof name !== "string" || name === "") {
            throw new Error("A list must have a name that is an non-empty string.");
        }

        this.name = name;
        this.items = [];
    }

    addItem(itemName) {
        // lägga till matvaror i sin shoppinglista.
        // namn, kvantitet och kategori, bought = false (Grönsaker, Frukt etc).
    }

    removeItem(itemName) {
        // ta bort matvaror i sin shoppinglista.
    }

    buy(itemName) {
        // markera varor som köpta

    }

}
