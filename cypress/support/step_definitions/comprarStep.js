const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const comprarPage = require('../pages/comprarPage');

When ('clico no produto desejado {string}', (produto) => {
    
    comprarPage.clicaProdutoDesejado(produto);
})

When('seleciono o tamanho {string}', (numero) => {
   comprarPage.selecionarOpcaoDesejada(numero);
});

When('seleciono a cor {string}', (cor) => {
   comprarPage.selecionarOpcaoDesejada(cor);
});

When('valido se o produto esta {string}', (mensagem) => 
{
  comprarPage.validarMensagemDeEstoque(mensagem);
});

When('clico para comprar', () => {
    comprarPage.comprarProduto();
});

Then('será apresentada a mensagem {string}', (produto) => {
  comprarPage.validarMensagem(produto);
});

When('clico em ver carrinho', () => {
    comprarPage.clicarVerCarrinho();
});

Then('será apresentada o produto {string}', (produto) => {
  comprarPage.validarProdutoNoCarrinho(produto);
});

When('clico em concluir compra', () => {
    comprarPage.clicarconcluircompra();
});

When('preencho os dados de faturamento:', (dataTable) => {
  const dados = dataTable.rowsHash();
  comprarPage.preencherFormularioFaturamento(dados);
});

When('informo a forma de pagamento {string} e concordo com os termos e condições', (formaPagamento) => {
    comprarPage.selecionarFormaPagamento(formaPagamento);
    comprarPage.concordarTermosECondicoes();
});

When('clico em finalizar compra', () => {
    comprarPage.clicarFinalizarCompra();
});

Then('o pedido é finalizado com sucesso', () => {
    comprarPage.validarMensagemSucesso();
    comprarPage.validarNumeroPedido();
});

Then('visualizo o método de pagamento {string}', (metodo) => {
    comprarPage.validarMetodoPagamento(metodo);
});

Then('visualizo o produto {string} nos detalhes do pedido', (produto) => {
    comprarPage.validarProdutoPedido(produto);
});