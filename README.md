# 🧪 Automação de Testes E2E com Cypress + Cucumber

## 📌 Visão Geral

Este projeto implementa testes automatizados E2E utilizando **Cypress** com **Cucumber (BDD)**, organizados de forma modular e escalável.

A estrutura foi definida para separar responsabilidades entre camadas, facilitando manutenção, leitura e reutilização de código.

URL Base do E-commerce Testado:
https://automationpratice.com.br/
---

## 🧱 Arquitetura do Projeto

A automação está estruturada com base nos seguintes componentes:

* **Features (BDD)**
* **Step Definitions**
* **Pages (Page Object Model)**
* **Common (reutilização)**
* **Custom Commands**

---

## 📂 Estrutura de Pastas

```
cypress/
│
├── e2e/
│   └── features/
│       ├── Login.feature
│       ├── CarrinhoDeCompras.feature
│       └── ListaDeDesejos.feature
│
├── support/
│   ├── pages/
│   │   ├── loginPage.js
│   │   ├── carrinhoPage.js
│   │   ├── listaDesejosPage.js
│   │   └── commonPage.js
│   │
│   ├── step_definitions/
│   │   ├── loginSteps.js
│   │   ├── carrinhoSteps.js
│   │   ├── listaDesejosSteps.js
│   │   └── commonSteps.js
│   │
│   ├── commands.js
│   └── e2e.js
│
├── fixtures/
└── cypress.config.js
```

---

## 🧾 Features (BDD)

Os cenários são escritos em formato **Gherkin**, permitindo descrever comportamentos do sistema em linguagem natural.

Cada arquivo `.feature` representa uma funcionalidade do sistema, contendo:

* **Funcionalidade**
* **Cenários**
* **Passos (Dado, Quando, Então)**

Exemplo de responsabilidades:

* Descrever o fluxo de login
* Validar regras de negócio
* Representar ações do usuário

---

## 🔗 Step Definitions

Os arquivos de **steps** fazem a ligação entre os cenários escritos em Gherkin e a execução do código.

Responsabilidades:

* Interpretar os passos das features
* Chamar métodos das páginas
* Orquestrar o fluxo de execução

Cada domínio possui seu próprio arquivo:

* `loginSteps.js`
* `carrinhoSteps.js`
* `listaDesejosSteps.js`

---

## 📄 Pages (Page Object Model)

A camada de **Pages** centraliza os elementos e ações da interface.

Cada página contém:

* Seletores dos elementos
* Métodos que representam ações do usuário

Exemplo de responsabilidades:

* Preencher campos
* Clicar em botões
* Interagir com elementos da UI

Arquivos:

* `loginPage.js`
* `carrinhoPage.js`
* `listaDesejosPage.js`

---

## ♻️ CommonPage

O arquivo `commonPage.js` concentra ações reutilizáveis que não pertencem a uma única página.

Responsabilidades:

* Ações genéricas da aplicação
* Interações comuns entre diferentes fluxos

---

## 🔁 CommonSteps

O arquivo `commonSteps.js` contém steps reutilizáveis entre diferentes cenários.

Responsabilidades:

* Centralizar passos compartilhados
* Evitar duplicação de código nos steps

---

## ⚙️ Custom Commands

Os comandos customizados estão definidos em `commands.js` e estendem o Cypress com ações reutilizáveis.

Exemplos de comandos:

```js
cy.clickElement(selector)
cy.typeText(selector, text)
cy.fillInput(selector, value)
cy.selectDropdown(selector, value)
```

Responsabilidades:

* Padronizar interações com elementos
* Reduzir repetição de código
* Melhorar legibilidade dos testes

---

## 🔄 Fluxo de Execução

1. O cenário é definido em um arquivo `.feature`
2. O step correspondente é identificado no arquivo de steps
3. O step chama um método da Page
4. A Page executa a ação utilizando Cypress
5. Custom Commands são utilizados para padronizar interações

---

## 📦 Execução dos Testes

### Instalar dependências

```
npm install
```

### Executar em modo interativo

```
npx cypress open
```

### Executar em modo headless

```
npx cypress run
```

---