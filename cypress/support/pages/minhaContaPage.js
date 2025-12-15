// selectors
const registerSelectors = {
  emailInput: '#reg_email',
  passwordInput: '#reg_password',
  registerButton: 'input[name="register"]',
};

const loginSelectors = {
  emailInput: 'input[id="username"]',
  passwordInput: 'input[id="password"]',
  loginButton: 'input[name="login"]',
};

class MinhaContaPage {

  // ===== Register =====
  fillRegisterEmail(email) {
    cy.get(registerSelectors.emailInput).type(email);
  }

  fillRegisterPassword(password) {
    cy.get(registerSelectors.passwordInput).type(password);
  }

  submitRegister() {
    cy.get(registerSelectors.registerButton).click();
  }

  // ===== Login =====
  fillLoginEmail(email) {
    cy.get(loginSelectors.emailInput).type(email);
  }

  fillLoginPassword(password) {
    cy.get(loginSelectors.passwordInput).type(password);
  }

  submitLogin() {
    cy.get(loginSelectors.loginButton).click();
  }
}

module.exports = new MinhaContaPage();
