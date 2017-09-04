module.exports = class GroceryListItem {

  constructor(name){
     if(typeof name !== "string" || name === ""){
      throw new Error("A list item must have a name that is an non-empty string.");
    }
    this.name = name;
    this.bought = false;
  }

}