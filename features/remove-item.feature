Feature: Remove an item from list
    As a shopper
    I should be able to remove items from my grocery list.

    Scenario: Remove item from list
        Given that I have an item in the grocery list
        When I remove item
        Then the item should be removed from list

    Scenario Outline: Remove item from list
        Given that I have an <item> in the grocery list
        When I remove <item>
        Then the <item> should be removed from list

        Examples:
            |items   |
            |Scones  |
            |Filmjölk|
