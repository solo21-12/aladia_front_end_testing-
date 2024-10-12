// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("fillEmailFormAndSubmit", (email) => {
  cy.get('[data-testid="email-input"]').type(email);
  cy.get("#submit-button").click();
});

Cypress.Commands.add(
  "fillMoreInfoFormAndSubmit",
  (name, surname, password, confirmPassword) => {
    cy.get('[data-testid="name-input"]').type(name);
    cy.get('[data-testid="surname-input"]').type(surname);
    // Remove the email field
    // cy.get('[data-testid="email-input"]').type(email); // This line is removed
    cy.get('[data-testid="password-input"]').type(password);
    cy.get('[data-testid="confirm-password-input"]').type(confirmPassword);
    cy.get("#submit-button").click();
  }
);
