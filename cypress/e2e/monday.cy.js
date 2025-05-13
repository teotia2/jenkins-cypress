import pagetwo from "../support/pagetwo";

describe("this is a routine check for the prictise", () => {
  it("fetch the data from the pageobject and manully skip the captcha", () => {
    pagetwo.visit();
    pagetwo.Contact();
    pagetwo.name("prashant");
    pagetwo.last("teotia");
    pagetwo.emailid("prashant@gmail.com");
    pagetwo.comments("none right now");

    cy.pause();

    pagetwo.submitbtn();
  });
});
