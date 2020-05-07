import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements

class BlankLogin {

    fillEmailBlank() {
        cy.get(loginElements.emailFild()).click()
        .type('    ')
    }

    fillPasswordBlank() {
        cy.get(loginElements.passwordFild()).click()
        .type('    ')
    }

    submitLoginBlank() {
        cy.get(loginElements.submitLogin()).click()
        
    }

};

export default BlankLogin;