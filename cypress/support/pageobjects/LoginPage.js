/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements

const url = Cypress.env("baseUrl")

class LoginPage {

    accessSite() {
        cy.visit(url)
    }

    clickButtonSignIn() {
        cy.get(loginElements.buttonLogin()).click()
    }
  
    fillEmail() {
        cy.get(loginElements.emailFild()).click()
        .type('1515@gmail.com')
    }

    fillPassword() {
        cy.get(loginElements.passwordFild()).click()
        .type('12345')
    }

    submitLogin() {
        cy.get(loginElements.submitLogin()).click()
    }
};

export default LoginPage;





