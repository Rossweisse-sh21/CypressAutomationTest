describe("Login Valid Test on SauceDemo", () => {
  it("Should successfully login with valid credentials", () => {
    // Open the SauceDemo login page
    cy.visit("https://www.saucedemo.com/");

    // Enter valid username and password
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");

    // Click the login button
    cy.get("#login-button").click();

    // Verify that the login is successful by checking the URL
    cy.url().should("include", "/inventory.html");

    // Verify that the products page is displayed
    cy.contains("Products").should("be.visible");
  });
});
