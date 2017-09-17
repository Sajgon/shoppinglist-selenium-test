let assert = require('assert');
let { defineSupportCode } = require('cucumber');
let GroceryList = require('../../grocery-list.js');

defineSupportCode(function({ Given, When, Then }) {

    let TestList = new GroceryList('A Listan');

    Given('that I have a grocery list with items', function() {

        let newItems = [
            { name: 'Candy', qt: 2, cat: 'Food' },
            { name: 'Müsli', qt: 3, cat: 'Food' },
            { name: 'Candles', qt: 20, cat: 'Mood' },
            { name: 'Tesla', qt: 1, cat: 'Car' }
        ];

        newItems.map((x) => TestList.addItem(x.name, x.qt, x.cat));

        assert.ok(TestList instanceof GroceryList);
    });

    When('I click on a button for sorting in the listview', function() {

        assert.doesNotThrow(() =>
            TestList.sortAlphabetical(true),
            Error,
            'The method sortAlphabetical() does not have an boolean in-argument');
    });

    Then('the function should sort items by name in ascending or reversed alphabetical order', function() {

        let ascendingList = TestList.items.slice().sort((a, b) => a.name > b.name);

        assert.deepEqual(TestList.sortAlphabetical(true), ascendingList);

        let reversedList = TestList.items.slice().sort((a, b) => a.name < b.name);

        assert.deepEqual(TestList.sortAlphabetical(false), reversedList);
    });
});
