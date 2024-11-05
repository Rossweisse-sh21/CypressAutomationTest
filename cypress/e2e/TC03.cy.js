describe("Login Functionality", () => {
  it("should display an error message when trying to login without a password", () => {
    // Open saucdemo login page
    cy.visit("https://www.saucedemo.com/"); // Ganti dengan URL login jika berbeda

    // Enter a valid username "standard_user"
    cy.get('[data-test="username"]').type("standard_user");

    // Empty password
    cy.get('[data-test="password"]').clear();

    // Click the login button
    cy.get('[data-test="login-button"]').click();

    // Error message "Password is required"
    cy.get(".error-message-container") // Selector for container error message
      .should("be.visible")
      .and("contain", "Epic sadface: Password is required");
  });
});
