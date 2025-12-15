const comprarPageSelectors = 
{
  nome: '#billing_first_name',
  sobrenome: '#billing_last_name',
  empresa: '#billing_company',
  pais: '#billing_country',
  endereco1: '#billing_address_1',
  endereco2: '#billing_address_2',
  cidade: '#billing_city',
  estado: '#billing_state',
  cep: '#billing_postcode',
  telefone: '#billing_phone',
  email: '#billing_email',
  btnFinalizarCompra: '#place_order'
}


class ComprarPage {
    clicaProdutoDesejado (produto)
    {
        const xpath = `(//h3[@class='name']//a[contains(normalize-space(.),'${produto}')])`;
        cy.xpath(xpath).click();
    }

    selecionarOpcaoDesejada(opcao)
    {
        const xpath = `//li[contains(@class,'button-variable-item') and @data-value='${opcao}']`;
        cy.xpath(xpath, { timeout: 10000 }).should('be.visible').and('not.be.disabled').click();
    }

    validarMensagemDeEstoque(mensagem)
    {
        const xpath = `//p[contains(@class,'stock') and contains(normalize-space(.),'${mensagem}')]`;
        cy.xpath(xpath).should('exist').should('be.visible');
    }

    comprarProduto(){
        const xpath = `//button[normalize-space(.)='Comprar']`;
        cy.xpath(xpath).click();
    }

    validarMensagem(mensagem) 
    {
        const xpath = `//div[contains(@class,'woocommerce-message') and contains(normalize-space(.),'${mensagem}')]`;
        cy.xpath(xpath).should('exist') .should('be.visible');
    }

    clicarVerCarrinho()
    {
       cy.xpath(`//a[contains(@class,'wc-forward') and normalize-space(.)='Ver carrinho']`)
    .should('exist')
    .should('be.visible')
    .click();
    }

    validarProdutoNoCarrinho(nomeProduto) 
    {
        const xpath = `//td[contains(@class,'product-name')]//a[contains(normalize-space(.),'${nomeProduto}')]`;
        cy.xpath(xpath).should('exist').should('be.visible');
    }

    clicarconcluircompra()
    {
        cy.xpath(`//a[normalize-space(.)='Concluir compra']`).click();
    }

    preencherFormularioFaturamento(dados) 
    {

        if (dados.nome) cy.get(comprarPageSelectors.nome).clear()
        .type(dados.nome);

        if (dados.sobrenome) cy.get(comprarPageSelectors.sobrenome).clear()
        .type(dados.sobrenome);

        if (dados.empresa) y.get(comprarPageSelectors.empresa).clear()
        .type(dados.empresa);

        if (dados.pais) this.selecionarSelect2(
            comprarPageSelectors.pais,
            dados.pais
            );

        if (dados.endereco1) cy.get(comprarPageSelectors.endereco1).clear()
            .type(dados.endereco1);

        if (dados.endereco2) cy.get(comprarPageSelectors.endereco2)
            .clear()
            .type(dados.endereco2);

        if (dados.cidade) cy.get(comprarPageSelectors.cidade).clear()
            .type(dados.cidade);

        if (dados.estado) this.selecionarSelect2(comprarPageSelectors.estado,
            dados.estado);

        if (dados.cep) cy.get(comprarPageSelectors.cep).clear()
            .type(dados.cep);

        if (dados.telefone) cy.get(comprarPageSelectors.telefone).clear()
            .type(dados.telefone);

        if (dados.email) cy.get(comprarPageSelectors.email).clear()
            .type(dados.email);
            }

  selecionarSelect2(selectId, valor) 
  {
    cy.get(`${selectId} + .select2`) .click();
    cy.get('.select2-results__option').contains(valor).click();
  }

  selecionarFormaPagamento(formaPagamento) 
  {
    cy.xpath(`//input[@type='radio' and @name='payment_method' and @value='${formaPagamento}']`)
      .should('be.visible').check({ force: true });
  }

  concordarTermosECondicoes() 
  {
    cy.xpath(`//input[@type='checkbox' and contains(@name,'terms')]`)
      .should('exist').check({ force: true });
  }

  clicarFinalizarCompra(){
    cy.get(comprarPageSelectors.btnFinalizarCompra).click();
  }

  validarMensagemSucesso() 
  {
    cy.xpath(`//p[contains(@class,'woocommerce-thankyou-order-received')]`)
      .should('be.visible')
      .and('contain.text', 'Seu pedido foi recebido');
}

validarNumeroPedido() 
{
    cy.xpath(`//li[contains(@class,'woocommerce-order-overview__order')]//strong`)
      .should('be.visible')
      .invoke('text')
      .should('match', /\d+/);
}

validarMetodoPagamento(metodo) 
{
    cy.xpath(`//li[contains(@class,'woocommerce-order-overview__payment-method')]//strong`)
      .should('be.visible')
      .and('contain.text', metodo);
}

validarProdutoPedido(produto) 
{
    cy.xpath(`//table[contains(@class,'order_details')]//a[contains(normalize-space(.),'${produto}')]`)
      .should('be.visible');
}

}   

module.exports = new ComprarPage();