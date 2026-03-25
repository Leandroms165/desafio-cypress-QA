const  listaDesejosPage = {
  
     iconeListaDesejo: '//a[contains(@class,"offcanvas-toggle")]//i[contains(@class,"fa fa-heart")]',
     adicionarListaDesejo: '.product_item_two',
     iconFavoritar: 'i.fa-heart',
     modalAddSucess: '#swal2-html-container',
     buttonOkModal: 'button.swal2-confirm',
     menulistaDeDesejos: '.offcanvas-wishlist-item-single',
     idModalListaDesejos: '#offcanvas-wishlish',
     buttonFecharModal: 'button.offcanvas-close'
}

class ListaDesejosPage 
{
    ClicarIconeListaDesejos()
    {
        cy.xpath(listaDesejosPage.iconeListaDesejo).first().click();
    }

    FecharListaDesejos() 
    {
        cy.get(listaDesejosPage.idModalListaDesejos).find(listaDesejosPage.buttonFecharModal).dblclick()
    }
    clicarCategoriaCamera(categoria) 
    {
        cy.contains('a', categoria).should('be.visible').click()
    }

adicionarNaListaDesejos(index) 
{
  cy.get(listaDesejosPage.adicionarListaDesejo).eq(index).scrollIntoView()
    .within(() => 
    {
      cy.get(listaDesejosPage.iconFavoritar).click({ force: true })
    })
}

ValidaMensagemWishlist(mensagemEsperada) 
{
  cy.get(listaDesejosPage.modalAddSucess).should('be.visible').and('contain', mensagemEsperada)

  cy.get(listaDesejosPage.buttonOkModal).should('be.visible').click()
}

validarListNaoVazia() 
{
  cy.get(listaDesejosPage.menulistaDeDesejos).should('exist')
}
}

module.exports = new ListaDesejosPage();