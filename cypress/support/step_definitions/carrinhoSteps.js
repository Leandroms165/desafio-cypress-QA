const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
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