Feature: Remove item
    As a shopper 
    I should be able to remove items from my list

    Scenario: Remove item from a list
        Given that I have created a list
        And that I have clicked the list
        And I enter item name in the input field
        And I enter item qty in the input field
        And I click the submit button
        And a item will be visible in the listview
        When I click the remove button
        Then an item will be removed
