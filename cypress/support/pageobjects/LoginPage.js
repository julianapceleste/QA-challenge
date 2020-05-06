/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const LoginElements1 = new LoginElements


const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    clickLoginButton() {
        cy.get(LoginElements1.loginButton()).click()
    }

    submitLogin() {
        cy.get(LoginElements.submitLogin()).click()
    }
  
}

export default LoginPage;