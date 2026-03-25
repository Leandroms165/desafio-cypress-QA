const carrinhoPage = {
    imgQazandoShop: '//a[@href="/"]',
    iconeCarrinho: '//a[contains(@class,"offcanvas-toggle")]//i[contains(@class,"fa-shopping-bag")]',
    buttonSave: '//button[contains(text(),"Save")]',
    msgDadosObrigatorios: '#errorMessageFirstName',
    fecharCarrinho: '#offcanvas-add-cart',
    botaoCheckout: '#offcanvas-add-cart',
    buttonFecharMenu: 'button.offcanvas-close',
    iconAddCarrinho: '.product_item_two',
    modalMensagemSucess: '#swal2-html-container',
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
      cy.get(carrinhoPage.fecharCarrinho).find(carrinhoPage.buttonFecharMenu).click({ force: true })
      cy.get(carrinhoPage.fecharCarrinho).should('not.be.visible')
    }
    
    AdicionarItens(index) 
    {
        cy.get(carrinhoPage.iconAddCarrinho).eq(index).scrollIntoView().within(() => 
        {
            cy.get('i.fa-shopping-bag').click({ force: true })
        })
    }

    ValidarMensagemItemAdicionado()
    {
        cy.get(carrinhoPage.modalMensagemSucess).should('be.visible').and('contain', 'Successfully added to your Cart')
    }

    ClicarBotaoCheckout()
    {
        cy.get(carrinhoPage.botaoCheckout).find('a[href="/checkout-one"]').should('be.visible').click()
    }
    
    cadastroDadosBillingsInformation( firstname, lastName, companyName, emailAddress, country, stateCity, zipCode,fullAddress ,additionalNotes)
    {
        cy.fillInput('#fname', firstname)
        cy.fillInput('#lname', lastName)
        cy.fillInput('#cname', companyName)
        cy.fillInput('#email', emailAddress)
        cy.selectDropdown('#country', country)
        cy.selectDropdown('#city', stateCity)
        cy.fillInput('#zip', zipCode)
        cy.fillInput('#faddress', fullAddress)
        cy.fillInput('#messages', additionalNotes)
    }

    ClicarEmSave()
    {
        cy.xpath(carrinhoPage.buttonSave).click()
    }
    
    ValidarMensagemDadosObrigatorios(mensagemEsperada) 
    {
       
       cy.get(carrinhoPage.msgDadosObrigatorios).should('be.visible').and('contain', mensagemEsperada)

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
        cy.get('.offer_modal_left').should('be.visible').find('h3').should('contain', mensagem)
    }
}

module.exports = new CarrinhoPage();