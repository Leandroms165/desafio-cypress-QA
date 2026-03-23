Cypress.Commands.add('clickElement', (selector) => 
{
  cy.get(selector).should('be.visible').click()
})

Cypress.Commands.add('typeText', (selector, text) => 
{
  cy.get(selector).should('be.visible').clear().type(text)
})

Cypress.Commands.add('selectOption', (selector, value) => 
{
  cy.get(selector).should('be.visible').select(value)
})

Cypress.Commands.add('fillInput', (selector, value) => 
{
  cy.get(selector).should('be.visible').clear().type(value)
})

Cypress.Commands.add('selectDropdown', (selector, value) => 
{
  cy.get(selector).should('be.visible').select(value)
})

