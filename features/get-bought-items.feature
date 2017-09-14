Feature: Get bought items from a grocery list.
    As a shopper 
    I should be able to view items that are already bought from a grocery list.

    Scenario: View bought items from a grocery list
        Given that I have a grocery list with bought items
        When I click on a get bought items button
        Then a list with only the bought items will appear