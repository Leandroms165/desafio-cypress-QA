# language: pt

Funcionalidade: Resgiter
    Como um usuário
    Eu desejo registrar meu cadastro

Cenário: Registrar nova conta
    Dado que o usuário acessou a página minha conta
    Quando preencher com o email desejado
    E informo a senha
    E clico em registrar
    Então valido a mensagem: "A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta."

Cenário: Realizar login com sucesso
    Dado que o usuário acessou a página minha conta
    Quando preencher o email "aleta3255@uorak.com"
    E preencher a senha "Teste35@"
    Quando clico em login
    Então valido a mensagem: "A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta."
