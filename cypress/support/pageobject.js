

class LoginPage {



  visit() {
    cy.visit("https://practicetestautomation.com/practice-test-login/").should('have.text','practicetestautomation');
  }

  enterUsername(username) {
    cy.get("#username").type(username);
  }

  enterPassword(password) {
    cy.get("#password").type(password);
  }

  clickLogin() {
    cy.get("#submit").click();
  }



}

export default new LoginPage();
