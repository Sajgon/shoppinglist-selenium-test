let assert = require('assert');
let {defineSupportCode} = require('cucumber');
let GroceryList = require('../../grocery-list.js');

defineSupportCode(function({Given, When, Then}) {

    Given('that I have started the application', function () {

    });

    When('I choose to create a list and give it a unique name', function (callback) {

        callback();
    });

    Then('a list will be created', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
       });
});