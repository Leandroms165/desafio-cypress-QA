#language: pt

Funcionalidade: Carrinho de compras
    Como um usuário
    Eu desejo adicionar e remover produtos do Carrinho

Cenário: Adicionar itens no Carrinho
    Dado que o usuário realizou o login
    Quando acesso Qazando Shop
    E clico no ícone do carrinho de compras
    Quando remover os itens no carrinho
    E escolho dois itens para adicionar no carrinho

Cenário: Adicionar novo endereço
    Dado que o usuário realizou o login
    Quando acesso Qazando Shop
    E adiciono mais um item no carrinho
    E valido a mensagem de item adicionado com sucesso
    Quando clico no ícone do carrinho de compras
    E clico no botão de chekout
    Quando estou na tela chekout one preencho os dados:
    | First name | Last name | Company name | Email Address          | Country | State City  | Zip Code   | Full Address     | Additional Notes |
    | Henrique   | Suarez    | Finch        | henrique@dominio.com.br | usa     | Afghanistan | 32856-856  | Rua Casa Blanca  | Sem nota         |
    Quando clico em save
    Então será exibida a mensagem 'Billings Information registred with success!'

Cenário: Validar mensagem dados obrigatórios
    Dado que o usuário realizou o login
    Quando acesso Qazando Shop
    E adiciono mais um item no carrinho
    E valido a mensagem de item adicionado com sucesso
    Quando clico no ícone do carrinho de compras
    E clico no botão de chekout
    Quando clica em place order
    Então e exibida a mensagem: 'Preencha os dados de pagamento!'

Cenário: Realizar pedido
    Dado que o usuário realizou o login
    Quando acesso Qazando Shop
    E adiciono mais um item no carrinho
    Quando clico no ícone do carrinho de compras
    E clico no botão de chekout
    Quando estou na tela chekout one preencho os dados:
    | First name | Last name | Company name | Email Address          | Country | State City  | Zip Code   | Full Address     | Additional Notes |
    | Henrique   | Suarez    | Finch        | henrique@dominio.com.br | usa     | Afghanistan | 32856-856  | Rua Casa Blanca  | Sem nota         |
    Quando clico em save
    Então será exibida a mensagem 'Billings Information registred with success!'
    Quando clica em place order
    Então será exibida a mensagem de sucesso do pedido "Congrats! Your order was created with sucess!"