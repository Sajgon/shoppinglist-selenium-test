Feature: Adding an item to the grocery-list
    As a shopper 
    I should be able to add items to my grocery list so that I can remember to buy them.

    Scenario: Adding an item to an empty grocery list
        Given that I have an grocery list
        When I add an item to the list
        Then I should have one item in my grocery list.