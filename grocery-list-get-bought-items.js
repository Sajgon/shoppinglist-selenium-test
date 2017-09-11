// Import GroceryListItem
// so that it can be used in this file
let GroceryList = require('./grocery-list');
let GroceryListItem = require('./grocery-list-item');


// Export the class GroceryList as a node module
module.exports = class GroceryListBoughtItems {
  
  // When a new GroceryList is created
  // set the properties name (from inargument)
  // and items (an empty array)
  constructor(name){
    if(typeof name !== "string" || name === ""){
      throw new Error("A list must have a name that is an non-empty string");
    }
    this.name = name;
    this.items = [];
  }

}