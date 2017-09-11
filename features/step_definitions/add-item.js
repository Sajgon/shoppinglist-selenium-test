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
        TestList.addToList(item, quantity, category);
        assert(TestList == true && TestList.items[0].name == item);
    });

    Then(/I should have (.*) of the item (.*) in my grocery list./, function (quantity,item) {
        assert(TestList == true && TestList.items[0].quantity == quantity && TestList.items[0].name == item);
    });
});