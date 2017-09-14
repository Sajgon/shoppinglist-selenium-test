Feature: Remove an item from list
    As a shopper
    I should be able to remove items from my grocery list.

    Scenario Outline: Remove item from the grocery list
        Given that I have an grocery list
        And that I have an item "<item>" in the list
        When I remove the item "<item>"
        Then the item "<item>" should be removed from list

        Examples:
            |item   |
            |beer   |
            |banana |
            |shoes  |

    Scenario Outline: Add two items to the grocery list and then remove one of them
        Given that I have an grocery list
        And that I have two items, "<item1>" and "<item2>" in the list
        When I remove one of the items, item "<item1>"
        Then only the item "<item2>" should be left

        Examples:
            |item1   |item2 |
            |milk    |cow   |
            |carrots |soul  |
            |soup    |water |