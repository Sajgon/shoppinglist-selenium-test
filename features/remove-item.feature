Feature: Remove an item from list
    As a shopper
    I should be able to remove items from my grocery list.

    Scenario Outline: Remove item from the grocery list
        Given that I have an item "<item>" in the list
        When I remove the item "<item>"
        Then the item "<item>" should be removed from list


        Examples:
            |item   |
            |beer   |
            |banana |
            |shoes  |
