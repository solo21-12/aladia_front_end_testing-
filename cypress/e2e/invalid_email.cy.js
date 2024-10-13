describe("template spec", () => {
  /* ==== Test Created with Cypress Studio ==== */
  it("it should throw an error when the email is invalid", function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("/");
    cy.wait(5000);
    cy.get(".relative > span").click();
    cy.get(".input-field").clear("t");
    cy.get(".input-field").type("test");
    cy.get(".px-4 > .duration-300").click();
    cy.get("#error_msg")
      .should("be.visible")
      .and("contain.text", "Invalid email address"); //
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("it should validate the password", function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("/");
    cy.wait(5000);
    cy.get(".relative > span").click();
    cy.get(".input-field").clear("t");
    cy.get(".input-field").type("test@gmail.com");
    cy.get("#submit-button > .z-0 > .gradient").click();
    cy.get(".flex-col > .gap-2 > .flex").click();
    cy.get('[data-testid="name-input"] > .input-field').type("test");
    cy.get(".z-10 > :nth-child(1) > .flex-col").click();
    cy.get('[data-testid="surname-input"] > .input-field').type("test");
    cy.get('[data-testid="password-input"] > .input-field').type("password");
    cy.get('[data-testid="confirm-password-input"] > .input-field').click();
    cy.get("#error_msg").should("be.visible");
    /* ==== End Cypress Studio ==== */
  });
});
