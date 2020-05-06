const { Given, And, When, Then } = require('cypress-cucumber-preprocessor/steps');

import LoginPage from '../pageobjects/LoginPage'
const Login = new LoginPage

import Account from '../pageobjects/AccountPage'
const Account1 = new Account

Given('que eu acesse a home da aplicação', () => {
   Login.acessSite();
})


When('eu clicar no botão "Sign In"', () => {
    Login.clickLoginButton();
    
});

And ('preencher o "Email Adreess"', () => {
    Account1.typeEmail();
});

And('clicar no botão "Create an Account"', () =>{
    Account1.buttonnCreate();
})


