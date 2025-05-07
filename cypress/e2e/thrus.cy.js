import logindum from '../support/friday';

describe("the flow of the test case", () => {
    it("must folw the pom", () => {
        logindum.visit();
        logindum.username("student");
        logindum.password("Password123");
        logindum.submit();
        logindum.visible();
        logindum.logout();

        //basic flow for the contact page in the website

        cy.get('#menu-item-18').should('have.text',"Contact");
        cy.contains('Contact').click();

        cy.get('#wpforms-161-field_0').should('be.visible').click().type("prashant");
        cy.get('#wpforms-161-field_0-last').should('be.visible').click().type("Teotia");

        cy.get('#wpforms-161-field_1').should('be.visible').type("prashantteotia73@gmail.com");

        cy.get('#wpforms-161-field_2').should('be.visible').type("NA").screenshot();

        cy.pause();

        cy.get('#wpforms-submit-161').should('be.visible').click().screenshot();


        
    });
});
