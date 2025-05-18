describe("the working of intercept/request", () => {
  it("should intercept the POST request", () => {
    // Intercept correct endpoint
    cy.intercept("POST", "https://reqres.in/api/users").as("createUser");

    // Send POST request
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: {
        name: "morpheus",
        job: "leader",
      },
      headers: {
        "x-api-key": "reqres-free-v1", // ✅ required header
        "Content-Type": "application/json",
      },
    });

    // Wait for intercept
    cy.wait('@createUser').its("response.statusCode").should("eq", 201);
  });
});
