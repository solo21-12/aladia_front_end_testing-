/* ==== Test Created with Cypress Studio ==== */
it("register_user", function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("/");
  cy.wait(5000);
  cy.document().toMatchImageSnapshot();

  cy.get("#join-us-button")
    .should("be.visible")
    .click();
  cy.document().toMatchImageSnapshot();

  cy.get(".input-field").clear("d");
  cy.get(".input-field").type("test@gmail.com");
  cy.get("#submit-button").click();
  cy.document().toMatchImageSnapshot();

  cy.get(".flex-col > .gap-2 > .flex").click();
  cy.get('[data-testid="name-input"] > .input-field').type("test");
  cy.get('[data-testid="surname-input"] > .input-field').type("user");
  cy.get('[data-testid="password-input"] > .input-field').type("password#856@");
  cy.get('[data-testid="confirm-password-input"] > .input-field').type(
    "password#856@"
  );
  cy.get("#submit-button").click();
  cy.document().toMatchImageSnapshot();
  cy.get('[data-testid="code-input-0"]').clear("1");
  cy.get('[data-testid="code-input-0"]').type("1");
  cy.get('[data-testid="code-input-1"]').clear("2");
  cy.get('[data-testid="code-input-1"]').type("2");
  cy.get('[data-testid="code-input-2"]').clear("3");
  cy.get('[data-testid="code-input-2"]').type("3");
  cy.get('[data-testid="code-input-3"]').clear("4");
  cy.get('[data-testid="code-input-3"]').type("4");
  cy.get('[data-testid="code-input-4"]').clear("5");
  cy.get('[data-testid="code-input-4"]').type("5");
  cy.get('[data-testid="code-input-5"]').clear("6");
  cy.get('[data-testid="code-input-5"]').type("6");
  cy.get("#submit-button").click();
  cy.document().toMatchImageSnapshot();
  /* ==== End Cypress Studio ==== */
});
