describe("Login without Username Test on SauceDemo", () => {
  it("Should show an error message when attempting to login without a username", () => {
    // Open the SauceDemo login page
    cy.visit("https://www.saucedemo.com/");

    // Ensure the login elements are visible before proceeding
    cy.get("#password").should("be.visible").and("be.enabled");
    cy.get("#login-button").should("be.visible").and("be.enabled");

    // Enter a valid password
    cy.get("#password").type("secret_sauce");

    // Leave the username field empty and click the login button
    cy.get("#user-name").clear(); // Ensure the username field is empty
    cy.get("#login-button").click();

    // Verify that the correct error message is displayed
    cy.get("[data-test='error']")
      .should("be.visible")
      .and("contain", "Username is required");
  });
});
