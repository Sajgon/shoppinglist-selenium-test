Feature: Sort list by categories.
    As a shopper
    I should be able to sort the grocery list by categories.

    Scenario: Sort listview from grocery list by category name
        Given that I have a grocery list with items that has a category
        When I click in the listview
        Then the function should sort items by alphabetical category name
