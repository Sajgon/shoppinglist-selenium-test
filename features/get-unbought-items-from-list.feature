Feature: Get unbought items from a specific list.
    As a shopper 
    I should be able to view items that is not bought yet from a shoppinglist.

    Scenario: View unbought items from a grocery list
        Given that I have a shoppinglist
        When I click on a button in the listview
        Then a list with only the unbought items will appear