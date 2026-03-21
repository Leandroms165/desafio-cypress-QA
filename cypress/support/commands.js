Cypress.Commands.add('loginValido', ()=> 
{
  cy.visit('/login')

  cy.get('#user').type(Cypress.env('userEmail'))
  cy.get('#password').type(Cypress.env('senha'))

  cy.get('#btnLogin').click()

  cy.contains('Login realizado').should('be.visible')

  cy.get('.swal2-confirm').click()
})
