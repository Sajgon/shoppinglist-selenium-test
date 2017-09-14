Feature: Sort list in alphabetical order.
    As a shopper
    I should be able to sort the grocery list in alphabetical order.

    Scenario: Sort listview from grocery list in alphabetical order
        Given that I have a grocery list with items that has a name
        When I click on a button in the listview
        Then the function should sort items by name in alphabetical order
