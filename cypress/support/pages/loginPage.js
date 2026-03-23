
const loginPage = {
    inputEmail: '#user',
    buttonConecte: '#btnLogin',
    inputSenha: '#password',
}

class LoginPage {
    PreencherEmail (email)
    {
        cy.clickElement(loginPage.inputEmail).type(email);
    }

    PreencherSenha (senha)
    {
        cy.clickElement(loginPage.inputSenha).type(senha);
    }

    ClicarEmConecteSe()
    {
        cy.clickElement(loginPage.buttonConecte);
    }
}

module.exports = new LoginPage();