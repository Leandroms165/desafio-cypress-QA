Cypress.Commands.add('loginValido', ()=> 
{
    const email = "aleta3255@uorak.com";
    const password = "Teste35@";

    cy.get('input[id="username"]').type(email);
    cy.get('input[id="password"]').type(password);
    cy.get('input[name="login"]').click();
    cy.get('p').should('contain.text', 
        "A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.");
})