describe("Logout Test on SauceDemo", () => {
  it("Should log out successfully and return to the login page", () => {
    // Given I am logged in as "standard_user"
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // When I click on the sidebar menu icon
    cy.get("#react-burger-menu-btn").click();

    // And I select "Logout"
    cy.get("#logout_sidebar_link").click();

    // Then I should be redirected to the login page
    cy.url().should("include", "/");
    cy.get("#login-button").should("be.visible");
  });
});
