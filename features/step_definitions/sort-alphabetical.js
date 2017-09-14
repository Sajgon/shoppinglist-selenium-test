let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');

defineSupportCode(function({Given, When, Then}) {

    let TestList = new GroceryList('A Listan');

    Given('that I have a grocery list with items that has a name', function () {

        TestList.addItem('Plommon', 10, 'Mat');
        TestList.addItem('Banan', 200, 'Mat');
        TestList.addItem('Abba', 1, 'Stuff');
        TestList.addItem('Yxa', 1, 'Stuff');

        assert.ok(TestList instanceof GroceryList);
    });

    When('I click on a button in the listview', function () {
        assert.doesNotThrow(() => TestList.sortAlphabetical());
    });

    Then('the function should sort items by name in alphabetical order', function () {

        let sortedList = TestList.items.slice().sort((a,b) => {
            if(a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            } else {
                return 0;
            }
        });

        assert.deepEqual(TestList.sortAlphabetical(), sortedList);

    });
});

