const carrinhoPage = {
    imgQazandoShop: '//a[@href="/"]',
    iconeCarrinho: '//a[contains(@class,"offcanvas-toggle")]//i[contains(@class,"fa-shopping-bag")]',
}

class CarrinhoPage 
{

    ClicarQazandoShop ()
    {
        cy.xpath(carrinhoPage.imgQazandoShop).first().click()
    }

    ClicarIconeCarrinho()
    {
        cy.xpath(carrinhoPage.iconeCarrinho).first().click()
    }

   RemoverItensCarrinho() 
   {
      cy.document().then((doc) => 
        {
            const btns = doc.querySelectorAll('a.offcanvas-wishlist-item-delete')

            if (btns.length === 0) 
            {
                cy.log('Carrinho vazio')
                return
            }
            cy.wrap(btns[0]).click({ force: true })

            cy.then(() => {
            this.RemoverItensCarrinho()
            }) 
        })  
    }

    FecharCarrinho() 
    {
      cy.get('#offcanvas-add-cart').find('button.offcanvas-close').click({ force: true })
      cy.get('#offcanvas-add-cart').should('not.be.visible')
      
    }
}

module.exports = new CarrinhoPage();