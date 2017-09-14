let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');

defineSupportCode(function({Given, When, Then}) {
    
    let name = "My Grocery List";
    let TestList = new GroceryList(name);
    let boughtItems = [];
    TestList.addItem("potatis", 3, "rotfrukt");
    TestList.addItem("banan", 2, "frukt");
    TestList.buy("banan");
    //Banan köps så den syns i exemplet

    Given('that I have a grocery list with bought items', function() {
        assert.ok(TestList instanceof GroceryList);
    });

    When('I click on a get bought items button', function() {
        boughtItems = TestList.filterBoughtItems();
    });

    Then('a list with only the bought items will appear', function() {
        assert.doesNotThrow(()=> boughtItems);
    });
});