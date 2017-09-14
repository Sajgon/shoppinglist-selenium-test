class module {

  static set exports(classDef){
    // create a global variable with the class name
    window[classDef.name] = classDef;
  }
}

function require(x){

    if(x == './grocery-list-item'){
        return GroceryListItem;
    }

    if(x == './grocery-list'){
        return GroceryList;
    }
    
}