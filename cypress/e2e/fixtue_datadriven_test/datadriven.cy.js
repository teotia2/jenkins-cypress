describe("the data driven test cases in automation", () => {
  it("should fetch the data", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");

    cy.fixture("logindata").then((value) => {
      cy.get("#username").should("be.visible").type(value.Username);
      cy.get("#password").should("be.visible").type(value.Password);
    });

    cy.get("#submit").should("be.visible").click();
  });
});
