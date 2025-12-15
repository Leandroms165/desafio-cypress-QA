README.md — Desafio Cypress + Cucumber QA
 Descrição do Projeto

Este projeto contém testes automatizados de ponta a ponta (E2E) desenvolvidos com Cypress + Cucumber (BDD) para validação de funcionalidades críticas de um e-commerce.

O site utilizado para a automação foi:
 https://lojaebac.ebaconline.art.br

A funcionalidade escolhida foi o fluxo de compra, por ser altamente reaproveitável em diferentes cenários de negócio, além de envolver autenticação, navegação, validações de produto, carrinho e checkout.

-> Tecnologias Utilizadas

Node.js
Cypress
Cypress Cucumber Preprocessor
JavaScript
BDD (Gherkin – PT-BR)

-> Estrutura do Projeto:

cypress/
 ├── e2e/
 │   └── features/
 │       ├── Comprar.feature
 │       └── Register.feature
 ├── fixtures/
 │   └── example.json
 ├── support/
 │   ├── pages/
 │   │   ├── commonPage.js
 │   │   ├── comprarPage.js
 │   │   └── minhaContaPage.js
 │   ├── step_definitions/
 │   │   ├── commonSteps.js
 │   │   ├── comprarSteps.js
 │   │   └── registerSteps.js
 │   ├── commands.js
 │   └── e2e.js
cypress.config.js
package.json
README.md


-> O projeto segue o padrão Page Object, visando melhor organização, reaproveitamento de código e manutenção.

-> Pré-requisitos:

Antes de iniciar, é necessário ter instalado:

Node.js (versão 16 ou superior)

NPM ou Yarn

Git

-> Instalação das Dependências

Clone o repositório:

git clone https://github.com/seu-usuario/desafio-cypress-QA.git


Acesse a pasta do projeto:

cd desafio-cypress-QA


Instale as dependências:

npm install

-> Como Executar os Testes
->  Executar Cypress em modo interativo:
npx cypress open


Depois, selecione o navegador e o arquivo .feature desejado.

->  Executar testes em modo headless (terminal):
npx cypress run

 Cenários Automatizados
 Funcionalidade: Comprar Produtos
 Cenário: Adicionar produtos ao carrinho

Descrição:
Valida o fluxo de navegação até a página de produtos, seleção de um item disponível em estoque e adição correta ao carrinho.

Motivo da escolha:
Este cenário é essencial em qualquer e-commerce e serve como base para diversos outros fluxos, como checkout, cálculo de frete e promoções.

-> Cenário: Comprar produto

Descrição:
Valida o fluxo completo de compra, incluindo:

Login

Seleção de produto

Carrinho

Preenchimento dos dados de faturamento

Escolha da forma de pagamento

Finalização do pedido

Motivo da escolha:
É o cenário mais crítico do negócio, pois valida a principal funcionalidade do sistema: a conversão de compra.

-> Funcionalidade: Register (Cadastro/Login)
Cenário: Registrar nova conta

Descrição:
Valida o cadastro de um novo usuário e o acesso bem-sucedido ao painel da conta.

Motivo da escolha:
O cadastro é a porta de entrada do usuário no sistema e impacta diretamente a experiência do cliente.

Cenário: Realizar login com sucesso

Descrição:
Valida o login de um usuário já existente com credenciais válidas.

Motivo da escolha:
Fluxo reutilizável em praticamente todos os cenários autenticados do sistema.

 Considerações Finais

Os testes foram escritos em BDD, facilitando a leitura e entendimento por pessoas técnicas e não técnicas.

-> O uso de Page Objects e Commands customizados melhora a reutilização e manutenção do código.

O projeto está preparado para expansão com novos cenários e funcionalidades.