const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const commonPage = require('../pages/commonPage');


Given("que o usuário realizou o login", () => {
    cy.loginValido();
})

Given("que o usuario acessa a tela de login",() =>{
   cy.visit('login')
})
