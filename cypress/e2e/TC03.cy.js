// cypress/integration/loginWithoutPassword.spec.js

describe("Login Functionality", () => {
  it("should display an error message when trying to login without a password", () => {
    // Given I am on the login page
    cy.visit("https://www.saucedemo.com/"); // Ganti dengan URL login jika berbeda

    // When I enter a valid username "standard_user"
    cy.get('[data-test="username"]').type("standard_user");

    // And I do not enter a password
    cy.get('[data-test="password"]').clear(); // Pastikan field password kosong

    // And I click the login button
    cy.get('[data-test="login-button"]').click();

    // Then I should see an error message "Password is required"
    cy.get(".error-message-container") // Selector untuk container pesan error
      .should("be.visible")
      .and("contain", "Epic sadface: Password is required");
  });
});
