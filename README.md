🛍️ Desafio Cypress + Cucumber QA: Automação E2E para E-commerce
📝 Descrição do Projeto
Este projeto consiste em uma suíte de testes automatizados End-to-End (E2E) para validar funcionalidades críticas de um e-commerce.

A automação foi desenvolvida utilizando o framework Cypress integrado com o Cucumber (padrão BDD/Gherkin), permitindo a escrita de testes legíveis por todo o time (técnicos e não-técnicos).

URL Base do E-commerce Testado:

https://lojaebac.ebaconline.art.br

🎯 Foco Estratégico
O foco principal da automação foi o fluxo de compra completo. Esta escolha se deu por ser a funcionalidade de maior valor para o negócio, englobando:

Autenticação (Login/Cadastro)

Navegação e Seleção de Produtos

Interação com o Carrinho

Checkout e Finalização de Pedido

⚙️ Tecnologias e Arquitetura
💻 Tecnologias Utilizadas
Cypress: Framework principal para execução dos testes E2E.

Cucumber: Utilizado via cypress-cucumber-preprocessor para suporte ao BDD (Gherkin).

Node.js / NPM: Ambiente de execução e gerenciamento de dependências.

JavaScript: Linguagem de programação dos step definitions e Page Objects.

BDD (Gherkin – PT-BR): Linguagem de escrita dos cenários, promovendo a colaboração.

🏛️ Estrutura do Projeto (Page Object Pattern)
O projeto segue o padrão de design Page Object Model (POM), o que garante:

Reaproveitamento de Código: Lógica de interação de página centralizada.

Alta Manutenibilidade: Alterações na interface do usuário exigem modificações em apenas um local (o Page Object correspondente).

Organização Clara: Separação da lógica de teste (Steps) da lógica de interação com a UI (Pages).

└── cypress/
    ├── e2e/
    │   └── features/ ➡️ Arquivos .feature (Gherkin)
    │       ├── Comprar.feature
    │       └── Register.feature
    ├── support/
    │   ├── pages/ ➡️ Page Objects (Ações da UI)
    │   │   ├── commonPage.js
    │   │   ├── comprarPage.js
    │   │   └── minhaContaPage.js
    │   └── step_definitions/ ➡️ Steps (Lógica do Cenário)
    │       ├── commonSteps.js
    │       ├── comprarSteps.js
    │       └── registerSteps.js
    ├── fixtures/ ➡️ Dados de teste estáticos
    └── cypress.config.js

    🛠️ Como Iniciar
✅ Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente:

Node.js (versão 16 ou superior)

NPM (Gerenciador de Pacotes) ou Yarn

Git

📦 Instalação das Dependências
1 - Clone o repositório:

git clone https://github.com/seu-usuario/desafio-cypress-QA.git

2 - Acesse a pasta do projeto:

cd desafio-cypress-QA

3 - Instale todas as dependências do projeto:

npm install

_________________________________________________________________________________________________
▶️ Como Executar os Testes

🖥️ Modo Interativo (Cypress Open)
Para visualizar a execução dos testes em tempo real:

npx cypress open

Após a abertura da interface do Cypress, selecione o navegador e o arquivo .feature desejado para iniciar a execução.

💨 Modo Headless (Terminal)
Para execução rápida e ideal para integração contínua (CI):

npx cypress run

🧪 Cenários Automatizados
🛒 Funcionalidade: Comprar Produtos
✔️ Cenário: Adicionar produtos ao carrinho

Descrição:
Valida o fluxo de navegação até a página de produtos, seleção de um item disponível em estoque e adição correta ao carrinho.

Motivo da escolha:
Este cenário é essencial em qualquer e-commerce e serve como base para diversos outros fluxos, como checkout, cálculo de frete e promoções.

✔️ Cenário: Comprar produto

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

👤 Funcionalidade: Register (Cadastro/Login)
✔️ Cenário: Registrar nova conta

Descrição:
Valida o cadastro de um novo usuário e o acesso bem-sucedido ao painel da conta.

Motivo da escolha:
O cadastro é a porta de entrada do usuário no sistema e impacta diretamente a experiência do cliente.

✔️ Cenário: Realizar login com sucesso

Descrição:
Valida o login de um usuário já existente com credenciais válidas.

Motivo da escolha:
Fluxo reutilizável em praticamente todos os cenários autenticados do sistema.



✨ Considerações Finais Legibilidade: 

A escolha do BDD/Gherkin (PT-BR) torna os testes autoexplicativos, permitindo que stakeholders de negócio possam ler e entender a cobertura.Reaproveitamento: O uso estratégico do Page Object Model e de Cypress Custom Commands garante alta reutilização, minimizando o código duplicado.

Escalabilidade: 

A estrutura atual está pronta para fácil expansão, bastando adicionar novos arquivos .feature, .page.js e .steps.js para cobrir novas funcionalidades.

