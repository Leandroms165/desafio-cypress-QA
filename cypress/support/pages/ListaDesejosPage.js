const  listaDesejosPage = {
  
     iconeListaDesejo: '//a[contains(@class,"offcanvas-toggle")]//i[contains(@class,"fa fa-heart")]',

}

class ListaDesejosPage 
{
    ClicarIconeListaDesejos()
    {
        cy.xpath(listaDesejosPage.iconeListaDesejo).first().click();
    }

    FecharListaDesejos() 
    {
        cy.get('#offcanvas-wishlish').find('button.offcanvas-close').dblclick()
    }
    clicarCategoriaCamera(categoria) {
  cy.contains('a', categoria)
    .should('be.visible')
    .click()
}

adicionarNaListaDesejos(index) {
  cy.get('.product_item_two')
    .eq(index)
    .scrollIntoView()
    .within(() => {
      cy.get('i.fa-heart')
        .click({ force: true })
    })
}

ValidaMensagemWishlist(mensagemEsperada) {
  cy.get('#swal2-html-container')
    .should('be.visible')
    .and('contain', mensagemEsperada)

     cy.get('button.swal2-confirm')
    .should('be.visible')
    .click()
}

validarListNaoVazia() {
  cy.get('.offcanvas-wishlist-item-single')
    .should('exist')
}
}

module.exports = new ListaDesejosPage();