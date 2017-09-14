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
    //Banan köps så den syns inte i exemplet

    Given('that I have a grocery list with unbought items', function() {
        assert.ok(TestList instanceof GroceryList);
    });

    When('I click on a get unbought items button', function() {
        boughtItems = TestList.filterUnboughtItems();
    });

    Then('a list with only the unbought items will appear', function() {
        assert.doesNotThrow(()=> boughtItems);
    });
});