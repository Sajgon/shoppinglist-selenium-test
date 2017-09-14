let GroceryListItem = require('./grocery-list-item');

module.exports = class GroceryList {

    constructor(name) {

        if (typeof name !== "string" || name === "") {
            throw new Error("A list must have a name that is a non-empty string.");
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

        this.items = filteredArray;
    }

    buy(itemName) {

		let item = {};

		// Finn item med korrekt namn
		for(var i = 0; i < this.items.length; i++){
			if(this.items[i].name === itemName){
				// Varan är nu köpt
				this.items[i].bought = true;
				item = this.items[i];
				break;
			}
		}

		if(item){return true;}
		return false;
    }

    sortAlphabetical() {

        // Gotcha. Need to create a copy of the items list,
        // otherwise this.items will be sorted

        let sorted = this.items.slice().sort((a,b) => {
            if(a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            } else {
                return 0;
            }
        });

        return sorted;

    }

    sortByCategory() {
      // sort lists by category
    }

    showBoughtItems(...args) {
      // bara kunna visa köpta varor.
    }

    showUnboughtItems(...args) {
      // bara kunna visa oköpta varor.
    }

	filterBoughtItems(){
		// Visa endast köpta varor
        let filteredArray = this.items.filter((item) => {
            return item.bought === true;
        });
        return filteredArray;
	}

	filterUnboughtItems(){
		// Visa endast oköpta varor
		let filteredArray = this.items.filter((item) => {
            return item.bought === false;
        });
        return filteredArray;
	}

}
