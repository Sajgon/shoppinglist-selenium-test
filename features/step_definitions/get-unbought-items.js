let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');

defineSupportCode(function({Given, When, Then}) {

	let TestList = {};
	let name = "My Grocery List";
	
    Given('that I have a grocery list with unbought items', function () {
		TestList = new GroceryList(name);
        assert.ok(TestList instanceof GroceryList);
    });

    When('I click on a get unbought items button', function () {

    });

    Then('a list with only the unbought items will appear', function () {

    });

	
});