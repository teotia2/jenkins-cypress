describe("the working of hooks",()=>{

    before('',()=>{

        cy.log('before executing test 01')

    })

    beforeEach('',()=>{

        cy.log('before executing every test case ')

    })

    afterEach('',()=>{

        cy.log('after executing test case ')

    })

    after('',()=>{
        cy.log("after executing the test case 03")
    })

    


    it("shouuld go to test the 1",()=>{
        cy.log("test case 01")
    })
    it("shouuld go to test the 2",()=>{
        cy.log("test case 02")
    })
    it("shouuld go to test the 3",()=>{
        cy.log("test case 03")
    })

})