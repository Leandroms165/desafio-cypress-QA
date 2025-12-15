const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const commonPage = require('../pages/commonPage');


When("efetuou o login", () => {
    cy.loginValido();
})
// === Comprar =====

When('clico em {string}', (opcao) => {
   commonPage.clicarNoMenu(opcao, 2);
});

Then('sou direcionado para a tela de produtos', () => {
   cy.url().should('include', '/produtos');
});