Feature: Mark an item as bought
    As a shopper 
    I should be able to mark items from my grocery list as bought.

    Scenario Outline: Mark an item as bought
        Given that I have a grocery list
        And added an item named <item>
        When I buy the item <item>
        Then <item> should be marked as bought

        Examples:
            |items|
            |gurka|
            |tomat|
            |banan|