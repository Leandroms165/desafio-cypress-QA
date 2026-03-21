const { When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const loginPage = require('../pages/loginPage');
const { faker } = require('@faker-js/faker');

When('preencher o email', () =>{
    const email = faker.internet.email();
    loginPage.PreencherEmail(email);
})

When('preencher a senha',() => {
    const senha = faker.internet.password();
    loginPage.PreencherSenha(senha);
})

When('clica em conecte-se',() => {
    loginPage.ClicarEmConecteSe();
})

Then('será exibida a mensagem: {string}', (mensagemEsperada) => {
    cy.contains(mensagemEsperada).should('be.visible')
})