describe("SauceDemo E2E Tests", () => {
  beforeEach(() => {
    // Open the SauceDemo login page before each test
    cy.visit("https://www.saucedemo.com/");
  });

  it("Login with invalid credentials", () => {
    // Enter an invalid username and password
    cy.get("#user-name").type("invalid_user");
    cy.get("#password").type("wrong_pass");

    // Click the login button
    cy.get("#login-button").click();

    // Verify that an error message is displayed
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Username and password do not match");
  });
});
