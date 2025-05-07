describe("to test the basic authentication", () => {
  it("should login the page witht he auth", () => {
    cy.visit("https://authenticationtest.com/HTTPAuth/", {
      auth: {
        username: "simpleForm@authenticationtest.com",
        password: "pa$$w0rd"
      }
    });

    cy.contains("Login Success").should("be.visible");
  });
});
