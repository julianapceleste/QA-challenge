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

    And('fill the fild "Password"', () => {
    loginPage.fillPassword();
    });

    And('I will be able to log in', () => {
    loginPage.submitLogin()
    cy.get('.page-heading').should('contain', 'My account')
    });
