Feature: Get unbought items from a grocery list.
    As a shopper 
    I should be able to view items that is not bought yet from a grocery list.

    Scenario: View unbought items from a grocery list
        Given that I have a grocery list with unbought items
        When I click on a get unbought items button
        Then a list with only the unbought items will appear