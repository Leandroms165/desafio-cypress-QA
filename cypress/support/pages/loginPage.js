
const loginPage = {
    inputEmail: '#user',
    buttonConecte: '#btnLogin',
    inputSenha: '#password',
}

class LoginPage {
    PreencherEmail (email)
    {
        cy.get(loginPage.inputEmail).type(email);
    }

    PreencherSenha (senha)
    {
        cy.get(loginPage.inputSenha).type(senha);
    }

    ClicarEmConecteSe()
    {
        cy.get(loginPage.buttonConecte).click();
    }
}

module.exports = new LoginPage();