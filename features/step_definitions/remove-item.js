let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');

defineSupportCode(function({Given, When, Then}) {

    let TestList = new GroceryList('Test Listan');

    Given('that I have an item {item} in the list', function (item) {
        assert.doesNotThrow(() => TestList.addItem(item, 2, 'dairy'));
    });;

    When('I remove the item {item}', function (item) {
        assert.doesNotThrow(()=> TestList.removeItem(item));
    });

    Then('the item {item} should be removed from list', function (item) {
        assert.doesNotThrow(()=> TestList.removeItem(item));
    });
});
