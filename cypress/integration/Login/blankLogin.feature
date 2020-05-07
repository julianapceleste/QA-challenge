Feature: Blank Login

  Scenario: Blank Login 
    Given that I'm on the home page
    When I click "Sign In"
    And dont fill "Email Adreess"
    And dont fill the fild "Password"
    Then an error message will be displayed