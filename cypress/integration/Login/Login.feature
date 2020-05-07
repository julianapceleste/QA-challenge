Feature: Login

  Scenario: login successfully
    Given that I'm on the home page
    When I click "Sign In"
    And fill the fild "Email Adreess"
    And fill the fild "Password"
    Then I will be able to log in
    

  Scenario: Invalid Login
    Given that I'm on the home page
    When I click "Sign In"
    And fill the fild "Email Adreess"
    And fill the fild "Password" with a wrong Password
    Then clicking login an error message will be displayed
    

  Scenario: Login blank
    Given that I'm on the home page
    When I click "Sign In"
    And dont fill "Email Adreess"
    And dont fill the fild "Password"
    Then an error message will be displayed