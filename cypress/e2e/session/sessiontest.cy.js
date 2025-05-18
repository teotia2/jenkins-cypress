describe("to check the automatic session maintained in the test", () => {

    beforeEach(() => {
      cy.session("first session", () => {
        cy.visit("https://atlas.centilytics.com/");
        cy.get("#mat-input-0").should("be.visible").type("centilytics");
        cy.contains(" CONTINUE ").should("be.visible").click();
  
        cy.contains("SIGN IN").should("be.visible");
        cy.get("#mat-input-1")
          .should("be.visible")
          .type("prashant.teotia@centilytics.com");
        cy.get("#mat-input-2").should("be.visible").type("Pradhan@123");
  
        cy.get(".button-name").contains(" SIGN IN ").click();
  
        cy.contains("Azure-CSP").click();
      });
    });
  
    it("should go to second block", () => {
      cy.visit("https://atlas.centilytics.com/");
      cy.contains("Azure-CSP").should("be.visible").click();

      cy.contains('Azure CSP Home').should('be.visible').click();

      cy.url().should('contain','/azure-csp/azure_csp_home')


    });
  
  });
