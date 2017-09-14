let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');

defineSupportCode(function({Given, When, Then}) {

    let TestList;

    Given('that I have an item {item} in the list', function (item) {
        //Assign an instance of GroceryList to the variable TestList
        TestList = new GroceryList('Test Listan');
        assert.doesNotThrow(() => TestList.addItem(item, 2, 'dairy'));
    });;

    When('I remove the item {item}', function (item) {
        assert.doesNotThrow(()=> TestList.removeItem(item));
    });

    Then('the item {item} should be removed from list', function (item) {
        assert.doesNotThrow(()=> TestList.removeItem(item));
    });

    Given('that I have two items, {item1} and {item2} in the list', function (item1, item2) {
        //Assign a fresh instance of GroceryList to TestList
        TestList = new GroceryList('Testlista med flera items');
        assert.doesNotThrow(() => TestList.addItem(item1, 1, 'feelings'));
        assert.doesNotThrow(() => TestList.addItem(item2, 1, 'veggies'));
    });

    When('I remove one of the items, item {item1}', function (item1) {
        assert.doesNotThrow(() => TestList.removeItem(item1));
    });

    Then('only the item {item2} should be left', function (item2) {
        //Check that there's only one item left in the items array, and that it is our second item
        assert(TestList.items.length == 1);
        assert(TestList.items[0].name == item2)
    });
});
