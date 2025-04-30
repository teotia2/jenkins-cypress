
import LoginPage from '../../support/pageobject';


describe("Login Test", () => {
  it("logs in successfully with valid credentials", () => {
    LoginPage.visit();
    LoginPage.enterUsername("student");
    LoginPage.enterPassword("Password123");
    LoginPage.clickLogin();

    //cy.url().should("include", "/dashboard");
  });
});
