# language: pt

Funcionalidade: Login
    Como um usuário
    Eu desejo validar o acessou  

Cenário: Validar mensagem Senha inválida
Dado que o usuario acessa a tela de login
    Quando preencher o email
    E clica em conecte-se
    Então será exibida a mensagem: "Senha inválida."

Cenário: Validar mensagem e-mail inválido
Dado que o usuario acessa a tela de login
    Quando preencher a senha
    E clica em conecte-se
    Então será exibida a mensagem: "E-mail inválido."

Cenário: Realizar login válido
Dado que o usuario acessa a tela de login
    Quando preencher o email
    E preencher a senha
    Quando clica em conecte-se
    Então será exibida a mensagem: "Login realizado"

