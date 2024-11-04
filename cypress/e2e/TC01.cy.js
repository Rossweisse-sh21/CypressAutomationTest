describe("Login Valid Test on SauceDemo", () => {
  it("Should successfully login with valid credentials", () => {
    // Buka halaman login SauceDemo
    cy.visit("https://www.saucedemo.com/");

    // Masukkan username dan password yang valid
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");

    // Klik tombol login
    cy.get("#login-button").click();

    // Verifikasi apakah login berhasil dengan mengecek URL
    cy.url().should("include", "/inventory.html");

    // Verifikasi apakah halaman produk muncul
    cy.contains("Products").should("be.visible");
  });
});
