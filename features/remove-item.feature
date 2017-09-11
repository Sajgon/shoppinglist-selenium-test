Feature: Remove an item from list
    As a shopper
    I should be able to remove items from my grocery list.

    Scenario: Remove item from the grocery list
        Given that I have added an item in the grocery list
        When I click button to remove item
        Then the item should be removed from list
