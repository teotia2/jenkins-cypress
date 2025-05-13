class himachal{


visit(){

    cy.visit("https://practicetestautomation.com/practice-test-login/")

}

Contact(){
    cy.contains("Contact").should('be.visible').click();
}

name(firstname){
    cy.get('#wpforms-161-field_0').should('be.visible').type(firstname);
}

last(lastname){
    cy.get('#wpforms-161-field_0-last').should('be.visible').type(lastname);
}

emailid(email){

    cy.get('#wpforms-161-field_1').should('be.visible').type(email);
}

comments(com){

    cy.get('#wpforms-161-field_2').should('be.visible').type(com);
}

submitbtn(){
    cy.get('#wpforms-submit-161').should('be.visible').click();
}











}

export default new  himachal();