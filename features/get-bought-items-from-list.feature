Feature: Get bought items from a specific list.
    As a shopper 
    I should be able to view items that is already bought from a shoppinglist.

    Scenario: View bought items from a grocery list
        Given that I have a shoppinglist
        When I click on a button in the listview
        Then a list with only the bought items will appear