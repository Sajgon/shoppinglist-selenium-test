let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');

defineSupportCode(function({Given, When, Then}) {

  // let theList;

    Given('that I have an grocery list', function (callback) {
        // theList = new GroceryList('Frukt');

        callback();
    });

    When('I add an item to the list', function (callback) {
    // theList.addToList('Banan');

        callback();
    });

    Then('I should have one item in my grocery list.', function (callback) {
        // assert(
        //   theList.items.length === 1,
        //   'After adding 1 item to GroceryList it remember the item.'
        // );

        callback();
    });
});