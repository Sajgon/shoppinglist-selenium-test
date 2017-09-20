Feature: Adding a list
    As a shopper 
    I should be able to create my grocery list.

    Scenario: Create a new grocery list
        Given that I have started the application 
        When I enter a unique name in the text input
        And click the button 
        Then a list will be created and visible in the list
