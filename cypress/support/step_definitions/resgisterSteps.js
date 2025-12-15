const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const { faker } = require('@faker-js/faker');
const minhaContaPage = require('../pages/minhaContaPage');

Given("que o usuário acessou a página minha conta", () => {
  cy.visit("/minha-conta");
});

// ===== Register =====
When("preencher com o email desejado", () => {
  const email = faker.internet.email();
  minhaContaPage.fillRegisterEmail(email);
});

When("informo a senha", () => {
  minhaContaPage.fillRegisterPassword("Senha@123");
});

When("clico em registrar", () => {
  minhaContaPage.submitRegister();
});

Then("valido a mensagem: {string}", (mensagemEsperada) => {
  cy.contains(mensagemEsperada).should("be.visible");
});

// ===== Login =====
When("preencher o email {string}", (email) => {
  minhaContaPage.fillLoginEmail(email);
});

When("preencher a senha {string}", (password) => {
  minhaContaPage.fillLoginPassword(password);
});

When("clico em login", () => {
  minhaContaPage.submitLogin();
});
