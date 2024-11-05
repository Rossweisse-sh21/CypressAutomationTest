describe("Remove Item from Cart Test on SauceDemo", () => {
  it("Should remove an item from the cart", () => {
    // Logged in as "standard_user"
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Verify one item "Sauce Labs Backpack" in the cart
    cy.contains("Sauce Labs Backpack").should("be.visible"); // Verify the item is visible
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); // Add the item to the cart
    cy.get(".shopping_cart_badge").should("have.text", "1"); // Verify the cart count is 1

    // Click “Remove” button from item in the cart
    cy.get(".shopping_cart_link").click(); // Navigate to the cart
    cy.get('[data-test="remove-sauce-labs-backpack"]').click(); // Click the "Remove" button

    // Then the cart icon should display a count of 0
    cy.get(".shopping_cart_badge").should("not.exist"); // Verify the cart is empty (count should be 0)
  });
});
