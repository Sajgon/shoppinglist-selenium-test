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
        // markera vara som köpta
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

    sortAlphabetically() {
      // sortera listor i bokstavsordning.

    }

    sortByCategory() {
      // sortera listor efter kategori.
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
	}
	
	filterUnboughtItems(){
		// Visa endast oköpta varor
		let filteredArray = this.items.filter((item) => {
            return item.bought === false;
        });	
	}

}
