Feature: Sort list in alphabetical order.
    As a shopper
    I should be able to sort the list in ascending and reversed alphabetical order.

    Scenario: Sort grocery list in alphabetical order
        Given that I have a grocery list with items
        When I click on a button for sorting in the listview
        Then the function should sort items by name in ascending or reversed alphabetical order
