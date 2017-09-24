Feature: Adding an item
    As a shopper
    I should be able to create a new item in the shopping list

    Scenario: Create a new item in grocery list
        Given that I have created a list
        And that I have clicked the list
        When I enter item name in the input field
        And I enter item qty in the input field
        When I click the submit button
        Then a item will be visible in the listview
