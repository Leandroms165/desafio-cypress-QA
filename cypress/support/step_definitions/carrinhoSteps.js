const { When, Then, DataTable } = require("@badeball/cypress-cucumber-preprocessor");
const carrinhoPage = require("../pages/carrinhoPage");

When('acesso Qazando Shop', () => {
    carrinhoPage.ClicarQazandoShop();
})

When('clico no ícone do carrinho de compras', () => {
    carrinhoPage.ClicarIconeCarrinho();
})

When('remover os itens no carrinho', () => {
    carrinhoPage.RemoverItensCarrinho();
    carrinhoPage.FecharCarrinho();
})

When('escolho dois itens para adicionar no carrinho',() => {
    carrinhoPage.AdicionarItens(0);
    carrinhoPage.ValidarMensagemItemAdicionado();
    
})

When('adiciono mais um item no carrinho', () => {
    carrinhoPage.AdicionarItens(2);
})

When('valido a mensagem de item adicionado com sucesso', () => {
    carrinhoPage.ValidarMensagemItemAdicionado();
})

When('clico no botão de chekout', () => {
    carrinhoPage.ClicarBotaoCheckout();
})

When('estou na tela chekout one preencho os dados:', (dataTable) => {
    cy.url().should('include', '/checkout-one');

    const dados = dataTable.hashes()[0];

    carrinhoPage.cadastroDadosBillingsInformation
    (
        dados['First name'],
        dados['Last name'],
        dados['Company name'],
        dados['Email Address'],
        dados['Country'],
        dados['State City'],
        dados['Zip Code'],
        dados['Full Address'],
        dados['Additional Notes'],
    )
});

When('clico em save', () => {
    carrinhoPage.ClicarEmSave();
});

When('clica em place order', () => {
    carrinhoPage.ClicarPlaceOrder();
})

Then('será exibida a mensagem {string}', (mensagem) => {
    carrinhoPage.ValidaMensagemSucessBillingsInformation(mensagem);
})

Then('e exibida a mensagem: {string}', (mensagem) => {
    carrinhoPage.ValidarMensagemDadosObrigatorios(mensagem);
})

Then('será exibida a mensagem de sucesso do pedido {string}', (mensagem) => {
    carrinhoPage.validarMensagemSucessoPedido(mensagem)
})