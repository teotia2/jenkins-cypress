class logindum {
  visit() {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  }

  username(username) {
    cy.get("#username").type(username);
  }

  password(password) {
    cy.get("#password").type(password);
  }

  submit() {
    cy.get("#submit").click();
  }

  visible() {
    cy.get(".post-title").should("contain.text", "Logged In Successfully");
  }

  logout() {
    cy.contains("Log out").click();
  }
}

export default new logindum();
