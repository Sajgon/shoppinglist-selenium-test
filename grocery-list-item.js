let GroceryList = require('./grocery-list');

module.exports = class GroceryListItem {

  constructor(name, quantity, category){

    if(typeof name !== "string" || name === ""){
        throw new Error("A list item must have a name that is a non-empty string.");
    }

    this.name = name;
    this.quantity = quantity;
    this.category = category;
    this.bought = false;
  }

}
