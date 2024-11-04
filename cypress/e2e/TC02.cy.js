describe("SauceDemo E2E Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Login with invalid credentials", () => {
    cy.get("#user-name").type("invalid_user");
    cy.get("#password").type("wrong_pass");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Username and password do not match");
  });
});
