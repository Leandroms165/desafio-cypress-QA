# language: pt

Funcionalidade: Comprar
  Como um usuário autenticado
  Eu desejo comprar produtos
  Para adicioná-los ao carrinho

Cenário: Adicionar produtos carrinho
    Dado que o usuário acessou a página minha conta
    E efetuou o login
    Quando clico em "Comprar"
    Então sou direcionado para a tela de produtos
    Quando clico no produto desejado "Aether Gym Pant"
    E seleciono o tamanho "32"
    E seleciono a cor "Green"
    E valido se o produto esta "em estoque"
    Quando clico para comprar
    Então será apresentada a mensagem "Aether Gym Pant” foi adicionado no seu carrinho."
    Quando clico em ver carrinho
    Então será apresentada o produto "Aether Gym Pant - 32, Green"

Cenário: Comprar produto
    Dado que o usuário acessou a página minha conta
    E efetuou o login
    Quando clico em "Comprar"
    Então sou direcionado para a tela de produtos
    Quando clico no produto desejado "Aether Gym Pant"
    E seleciono o tamanho "32"
    E seleciono a cor "Green"
    E valido se o produto esta "em estoque"
    Quando clico para comprar
    Então será apresentada a mensagem "Aether Gym Pant” foi adicionado no seu carrinho."
    Quando clico em ver carrinho
    Então será apresentada o produto "Aether Gym Pant - 32, Green"
    Quando clico em concluir compra
    E preencho os dados de faturamento:
      | campo        | valor              |
      | nome         | João               |
      | sobrenome    | Silva              |
      | empresa      | Empresa Teste      |
      | pais         | Brasil             |
      | endereco1    | Rua das Flores 123 |
      | endereco2    | Apto 101           |
      | cidade       | São Paulo          |
      | estado       | São Paulo          |
      | cep          | 01001-000          |
      | telefone     | 11999999999        |
      | email        | joao@email.com     |
    E informo a forma de pagamento "cheque" e concordo com os termos e condições
    Quando clico em finalizar compra
    Então o pedido é finalizado com sucesso
    Então visualizo o método de pagamento "Cheque"
    Então visualizo o produto "Aether Gym Pant" nos detalhes do pedido