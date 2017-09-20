let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');

defineSupportCode(function({Given, When, Then}) {

    let TestList = new GroceryList('My List');

    Given('that I have a grocery list with items that has a category', function () {

        let newItemsToAdd = [
            { name: 'Candy', qt: 2, cat: 'Food' },
            { name: 'Müsli', qt: 3, cat: 'Food' },
            { name: 'Candles', qt: 20, cat: 'Mood' },
            { name: 'Tesla', qt: 1, cat: 'Car' }
        ];

        newItemsToAdd.map((x) => TestList.addItem(x.name, x.qt, x.cat));

        assert.ok(TestList instanceof GroceryList);
    });

    When('I click in the listview', function () {
        assert.doesNotThrow(() => TestList.sortByCategory(true));
    });

    Then('the function should sort items by alphabetical category name', function () {

        let sortedList = TestList.items.slice().sort((a,b) => {
            if(a.category < b.category) {
                return -1;
            } else if (a.category > b.category) {
                return 1;
            } else {
                return 0;
            }
        });

        assert.deepEqual(TestList.sortByCategory(true), sortedList);

    });
});

