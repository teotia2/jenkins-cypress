describe("the commands select the option from the menu",()=>{

    it("should select the option",()=>{

        cy.visit("https://demoqa.com/select-menu")
        cy.get('#oldSelectMenu').select("Yellow")

        cy.get('#withOptGroup').click();
        cy.contains('Group 2, option 1').click();
    })
})