let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');

defineSupportCode(function({Given, When, Then}) {

    let TestList = new GroceryList('My List');

    Given('that I have a grocery list with items that has a category', function () {

        TestList.addItem('Beer', 1, 'Öl',);
        TestList.addItem('Plommon', 120, 'Mat');
        TestList.addItem('Väska', 120, 'Stuff');
        TestList.addItem('Lingon', 120, 'Mat');
        TestList.addItem('Abba', 1, 'Stuff');
        TestList.addItem('Saab', 1, 'Stuff');

        assert.ok(TestList instanceof GroceryList);
    });

    When('I click in the listview', function () {
        assert.doesNotThrow(() => TestList.sortByCategory());
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

        assert.deepEqual(TestList.sortByCategory(), sortedList);

    });
});

