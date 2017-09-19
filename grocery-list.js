let GroceryListItem = require('./grocery-list-item');

module.exports = class GroceryList {

    constructor(name) {

        if (typeof name !== "string" || name === "") {
            throw new Error("A list must have a name that is a non-empty string.");
        }

        this.name = name;
        this.items = [];
        // Add a static property if not already set
        GroceryList.allInstances = GroceryList.allInstances || [];
        // Push this to the static property allInstances
        GroceryList.allInstances.push(this);

        //everytime a new list is created, set all lists .active to 'false'
        GroceryList.allInstances.forEach(function(list){
            list.active = false;
        });
        //and then set THIS list .active to 'true'
        this.active = true;
    }

    addItem(name, quantity, category) {

        this.items.forEach(function(item) {
            if (item.name == name) {
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

        this.items = filteredArray;
    }

    buy(itemName) {

        let item = {};

        // Finn item med korrekt namn
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].name === itemName) {
                // Varan är nu köpt
                this.items[i].bought = true;
                item = this.items[i];
                break;
            }
        }

        if (item) { return true; }
        return false;
    }

    sortAlphabetical(arg) {

        // calling the function with an true or false arg
        // true = ascending, false = reversed

        if (typeof arg !== "boolean") {
            throw new Error("An boolean argument need to be passed");
        }

        let sortedByName;
        let x = this.items.slice();

        if (arg) {
            sortedByName = x.sort((a, b) => a.name > b.name);
        } else {
            sortedByName = x.sort((a, b) => a.name < b.name);
        }

        return sortedByName;
    }

    sortByCategory() {
        let sortedByCategory = this.items.slice().sort((a, b) => a.category > b.category);
        return sortedByCategory;
    }

    filterBoughtItems() {
        // Visa endast köpta varor
        let filteredArray = this.items.filter((item) => {
            return item.bought === true;
        });
        return filteredArray;
    }

    filterUnboughtItems() {
        // Visa endast oköpta varor
        let filteredArray = this.items.filter((item) => {
            return item.bought === false;
        });
        return filteredArray;
    }
}
