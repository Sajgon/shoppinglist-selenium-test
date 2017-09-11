Feature: Adding a list
    As a shopper 
    I should be able to create my grocery list.

    Scenario: Create a new grocery list
        Given that I have started the application
        When I choose to create a list and give it a unique name
        Then a list will be created
        And it will contain no items

    Scenario: Trying to create a new grocery list without a uniqe name
        Given that I have started the application
        When I choose to create a list without a name
        Then no list will be created
        And an error will occur