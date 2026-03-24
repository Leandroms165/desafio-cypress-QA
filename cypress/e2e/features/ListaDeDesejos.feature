# language: pt
Funcionalidade: Lista de desejos
    Como um usuário
    Eu desejo acessar lista de desejos

Cenário: Acessar Lista de desejos
    Dado que o usuário realizou o login
    Quando acesso Qazando Shop
    E clico no icone de lista de desejo
    Quando remover os itens no carrinho
    E fecha a lista
    Quando clicar na categoria 'Camera & Photo'
    E adiciono um item a lista de desejos
    Quando valido a mensagem 'Added to Wishlist'
    E clico no icone de lista de desejo
    Então valido que a lista não esta vazia