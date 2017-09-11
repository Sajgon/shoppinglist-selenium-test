let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');

defineSupportCode(function({Given, When, Then}) {

    let TestList = {};
    let name = "";

    Given('that I have started the application', function() {

    });

    When('I choose to create a list and give it a unique name', function() {
        name = "My Grocery List";
        TestList = new GroceryList(name);
    });

    Then('a list will be created', function() {
        assert(TestList.name == name);
    });

    Then('it will contain no items', function() {
        assert(TestList.items.constructor === Array && TestList.items.length === 0);
    });
});