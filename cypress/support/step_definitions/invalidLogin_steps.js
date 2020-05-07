const { Given, And, When, Then } = require('cypress-cucumber-preprocessor/steps');

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage


    Given("that I'm on the home page", () => {
        loginPage.accessSite();
    });

    When('I click "Sign In"', () => {
        loginPage.clickButtonSignIn();
    });

    When('fill the fild "Email Adreess"', () => {
    loginPage.fillEmail();
    });

    And('fill the fild "Password" with a wrong Password', () => {
        cy.get('#passwd').click()
        .type('12345678')
    });

    And('clicking login an error message will be displayed', () => {
    loginPage.submitLogin()
    cy.get('.alert.alert-danger').should('contain', 'Authentication failed.')
    });
