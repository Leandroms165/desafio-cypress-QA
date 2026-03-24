const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const listaDesejosPage = require("../pages/ListaDesejosPage");

When('clico no icone de lista de desejo', () => 
{
    listaDesejosPage.ClicarIconeListaDesejos();
})

When('fecha a lista', () => 
{
    listaDesejosPage.FecharListaDesejos();
})

When('clicar na categoria {string}', (categoria) => {
  listaDesejosPage.clicarCategoriaCamera(categoria);
})

When('adiciono um item a lista de desejos', () => {
  listaDesejosPage.adicionarNaListaDesejos(1);
})

Then('valido a mensagem {string}', (mensagem) => {
  listaDesejosPage.ValidaMensagemWishlist(mensagem)
})

Then('valido que a lista não esta vazia', () => {
    listaDesejosPage.validarListNaoVazia()
})