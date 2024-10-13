describe("template spec", () => {
  /* ==== Test Created with Cypress Studio ==== */
  it("it should send a request to reset the password", function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("/");
    cy.wait(5000);
    cy.get("#join-us-button")
      .should("be.visible")
      .click();

    cy.document().toMatchImageSnapshot();

    cy.get(".input-field").type("test@gmail.com");
    cy.get("#submit-button > .z-0 > .gradient").click();

    cy.document().toMatchImageSnapshot();

    cy.get(".flex-col > .gap-2 > .flex").click();
    cy.get('[data-testid="name-input"] > .input-field').type("Dawit");
    cy.get('[data-testid="surname-input"] > .input-field').type("Abraham");
    cy.get('[data-testid="password-input"] > .input-field').type("password1A@");
    cy.get('[data-testid="confirm-password-input"] > .input-field').type(
      "password1A@"
    );

    cy.get("#submit-button").click();

    cy.document().toMatchImageSnapshot();

    // cy.get(".v-overlay__scrim").click();
    cy.get("body").click(0, 0);

    cy.document().toMatchImageSnapshot();
    cy.get("#join-us-button")
      .should("be.visible")
      .click();
    cy.get("#submit-button > .z-0 > .gradient").click();
    cy.get(".mb-4 > .text-white\\/70").click();
    cy.document().toMatchImageSnapshot();

    cy.get("#submit-button > .z-0 > .gradient").click();
    /* ==== End Cypress Studio ==== */
  });
});
