let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');

defineSupportCode(function({Given, When, Then}) {
    
    let TestList = new GroceryList("My Grocery List");
    let boughtItems;
  
    //Banan köps så den syns i exemplet

    Given('that I have a grocery list with bought items', function() {
        assert.ok(TestList instanceof GroceryList);
        TestList.addItem("potatis", 3, "rotfrukt");
        TestList.addItem("banan", 2, "frukt");
        TestList.buy("banan");
        TestList.buy("potatis");
    });

    When('I click on a get bought items button', function() {
        boughtItems = TestList.filterBoughtItems();
    });

    Then('a list with only the bought items will appear', function() {
        boughtItems.forEach(function(item){
            assert(item.bought);
        });
    });
});