import CreateAccountElements from '../elements/AccountElements'
const AccountElements = new CreateAccountElements

class Account { 

    emailCreate (){
        cy.get(AccountElements.createAccount()).click()
    }

    typeEmail (){
        cy.get(AccountElements.createAccount()).click()
        .type('teste1019@gmail.com')
    }

    buttonnCreate(){
        cy.get(AccountElements.submitEmail()).click()
    }

};

export default Account;