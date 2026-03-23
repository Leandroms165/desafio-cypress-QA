const carrinhoPage = {
    imgQazandoShop: '//a[@href="/"]',
    iconeCarrinho: '//a[contains(@class,"offcanvas-toggle")]//i[contains(@class,"fa-shopping-bag")]',
    buttonSave: '//button[contains(text(),"Save")]',
    msgDadosObrigatorios: '#errorMessageFirstName',
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
    
    AdicionarItens(index) 
    {
        cy.get('.product_item_two').eq(index).scrollIntoView().within(() => 
        {
            cy.get('i.fa-shopping-bag').click({ force: true })
        })
    }

    ValidarMensagemItemAdicionado()
    {
        cy.get('#swal2-html-container').should('be.visible').and('contain', 'Successfully added to your Cart')
    }

    ClicarBotaoCheckout()
    {
        cy.get('#offcanvas-add-cart') .find('a[href="/checkout-one"]').should('be.visible').click()
    }
    
    cadastroDadosBillingsInformation( firstname, lastName, companyName, emailAddress, country, stateCity, zipCode,fullAddress ,additionalNotes)
    {
        // First Name
        cy.get('#fname').should('be.visible').clear().type(firstname)

        // Last Name
        cy.get('#lname').should('be.visible').clear().type(lastName)

        // Company Name
        cy.get('#cname').should('be.visible').clear().type(companyName)

        // Email
        cy.get('#email').should('be.visible').clear().type(emailAddress)

        // Country (select)
        cy.get('#country').should('be.visible').select(country)

        // State / City (select)
        cy.get('#city').should('be.visible').select(stateCity)

        // Zip Code
        cy.get('#zip').should('be.visible').clear().type(zipCode)

        // Full Address
        cy.get('#faddress').should('be.visible').clear().type(fullAddress)

        // Additional Notes
        cy.get('#messages').should('be.visible').clear().type(additionalNotes)
    }

    ClicarEmSave()
    {
        cy.xpath(carrinhoPage.buttonSave).click();
    }
    
    ValidarMensagemDadosObrigatorios(mensagemEsperada) {
    cy.get('#errorMessageFirstName')
      .should('be.visible')
      .and('contain', mensagemEsperada)
}

    ValidaMensagemSucessBillingsInformation(mensagemEsperada)
    {
      cy.get('.check-out-form').find('h3').should('be.visible').and('contain', mensagemEsperada)
    }
    ClicarPlaceOrder()
    {
        cy.contains('button', 'Place Order').should('be.visible').click()
    }

    validarMensagemSucessoPedido(mensagem) 
    {
        cy.get('.offer_modal_left')
      .should('be.visible')
      .find('h3')
      .should('contain', mensagem)
    }
}

module.exports = new CarrinhoPage();