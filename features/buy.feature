Feature: Mark an item as bought
  As a shopper 
  I should be able to mark items from my grocery list as bought.

  Scenario: Mark an item as bought
    Given that I have a grocery list
    And there is an unbought item
    When I buy an item
    Then the item should be marked as bought