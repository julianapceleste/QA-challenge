const { Given, And, When, Then } = require('cypress-cucumber-preprocessor/steps');

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

import BlankLogin from '../pageobjects/blankLogin'
const blankLogin = new BlankLogin


    Given("that I'm on the home page", () => {
        loginPage.accessSite();
    });

    When('I click "Sign In"', () => {
        loginPage.clickButtonSignIn();
    });

    When('dont fill "Email Adreess"', () => {
    blankLogin.fillEmailBlank();
    });

    And('dont fill the fild "Password"', () => {
    blankLogin.fillPasswordBlank();
    });

    And('an error message will be displayed', () => {
    blankLogin.submitLoginBlank()
    cy.get('.alert.alert-danger').should('contain', 'There is 1 error')
    });
