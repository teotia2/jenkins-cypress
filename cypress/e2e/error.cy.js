describe("the error handling", () => {
  it("should pass the 500 error", () => {
    cy.request({
      url: "https://httpstat.us/503",
      failOnStatusCode: false,
    });
  });
});
