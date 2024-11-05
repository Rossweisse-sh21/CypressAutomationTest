describe("Add Item to Cart Test on SauceDemo", () => {
  it("Should add an item to the cart", () => {
    // logged in as "standard_user"
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Add an item "Sauce Labs Backpack" to the cart
    cy.contains("Sauce Labs Backpack").should("be.visible"); // Verify the item is visible
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); // Add the item to the cart

    // Then the cart icon should display a count of 1
    cy.get(".shopping_cart_badge").should("have.text", "1"); // Verify the cart count is 1
  });
});
