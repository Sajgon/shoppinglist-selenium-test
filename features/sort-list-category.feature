Feature: Sort list by categories.
    As a shopper 
    I should be able to sort the grocery list by categories.

    Scenario: Sort listview from grocery list by categories
        Given that I have a grocery list
        When I click on a button in the listview
        Then the list should sort categories in alphabetical order
