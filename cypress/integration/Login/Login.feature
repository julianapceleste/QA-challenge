Feature: Login

  Scenario: Login with a predefined user
    Given that I'm on the home page
    When I click "Sign In"
    And fill the fild "Email Adreess"
    And fill the fild "Password"
    Then I will be able to log in
    
