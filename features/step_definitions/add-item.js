let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');

defineSupportCode(function({Given, When, Then}) {

    let TestList = {};
    let name = "";

    Given('that I have an grocery list', function() {
        name = "My Grocery List"
        TestList = new GroceryList(name);
        assert.ok(TestList instanceof GroceryList);
    });

    When(/I add (.*) of the item (.*) with the category (.*) to the list/,function(quantity,item,category){
        assert.doesNotThrow(()=>TestList.addItem(item, quantity, category));
    });

    Then(/I should have (.*) of the item (.*) of the category (.*) in my grocery list./, function ( quantity,item,category) {
        assert(
            TestList.items &&
            TestList.items.length == 1 &&
            TestList.items[0].quantity == quantity &&
            TestList.items[0].name == item
        );
    });

    Given('I have added {int} of the item potato with the category rootfruit to the list', function (int) {
        assert.doesNotThrow(()=>TestList.addItem("potato", int, "rootfruit"));
    });

    When('I also add {int} of the item potato with the category rootfruit to the list', function (int) {
        assert.throws(()=> TestList.addItem("potato", int, "rootfruit"));
    });
    
    Then('a error should occur', function() {
        assert.throws(()=> TestList.addItem("potato", int, "rootfruit"));
   });

});
