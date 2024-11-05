describe("Sort Products by Price (High to Low) on SauceDemo", () => {
  it("Should sort products in descending order by price", () => {
    // Logged in as "standard_user"
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Verify at products page
    cy.url().should("include", "/inventory.html");
    cy.get("#inventory_container").should("be.visible");

    // Select "Price (high to low)" from the sort dropdown
    cy.get(".product_sort_container").select("hilo");
  });
});
