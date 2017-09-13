let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');

defineSupportCode(function({Given, When, Then}) {

    let TestList;
    let name = "";
    let temp;

    Given('that I have a grocery list', function() {
        name = "My Grocery List"
        TestList = new GroceryList(name);
        assert.ok(TestList instanceof GroceryList);
    });
    
    Given(/I added (.*) of the item (.*)/, function(quantity,item) {
       temp = [quantity,item];

    });

    Given(/with category (.*)/, function(category) {
        let [quantity, item] = temp;
        assert.doesNotThrow(()=>TestList.addItem(item,quantity,category));
    });
    
    When(/I buy the item (.*)/, function(item) {
        assert.doesNotThrow(()=>TestList.buy(item));
    });

    Then(/the item (.*) should be marked as bought/, function (item) {
        for(let i=0; i < TestList.items.length; i++){
            if(TestList.items[i].name == item){
                assert(TestList.items[i].bought == true);
            }
        }
    });

    //NON_EXISTENT ITEMS:

    When(/I try to mark the \(non-existent\) item (.*) as bought/, function(item) {
        //Osäker på vad som ska testas här, metoden kallas ju i nästa then.
        //TestList.buy(item);
    });
    
    Then('a warning will be displayed', function() {
        assert.throws(
            () => {
                TestList.buy(item);
            },
            Error
        );
    });
});