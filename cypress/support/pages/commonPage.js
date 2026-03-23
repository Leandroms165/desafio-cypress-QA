const commonSelectors = {
  conecteSe: '//section[@id="top_header"]//a[@href="/login" and contains(.,"Conecte-se")]',
}

class CommonPage {

  clicarEmConecte() 
  {
    cy.xpath(commonSelectors.conecteSe).should('be.visible').click();
  }

  RealizarLogin() 
  {
    cy.visit('/login')
    
    cy.typeText('#user', Cypress.env('userEmail'))
    cy.typeText('#password', Cypress.env('senha'))
   
    cy.clickElement('#btnLogin')
    
    cy.contains('Login realizado').should('be.visible')

    cy.clickElement('.swal2-confirm')
  }
}

module.exports = new CommonPage();