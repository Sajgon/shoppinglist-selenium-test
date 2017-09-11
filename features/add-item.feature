Feature: Adding an item to the grocery-list
    As a shopper
    I should be able to add items to my grocery list so that I can remember to buy them.

    Scenario Outline: Adding an item to an empty grocery list
        Given that I have an grocery list
        When I add <quantity> of the item <item> with the category <category> to the list
        Then I should have <quantity> of the item <item> of the category <category> in my grocery list.

        Examples:
            |item    |category  |quantity|
            |milk    |dairy     |5       |
            |cucumber|vegetables|3       |
            |banana  |fruit     |6       |
