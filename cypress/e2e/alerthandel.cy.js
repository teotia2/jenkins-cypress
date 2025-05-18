describe("the handling of alert on the desktop",()=>{
    it("should click on alert and verify the assertion",()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.contains('Click for JS Confirm').should('be.visible').click();

        cy.on('window:confirm',()=>false)
        
    })

    it("should chek the box of the diffrent url ",()=>{

        cy.visit('https://the-internet.herokuapp.com/checkboxes')

        cy.get('#checkboxes > :nth-child(1)').check().should('be.checked')
    })
})