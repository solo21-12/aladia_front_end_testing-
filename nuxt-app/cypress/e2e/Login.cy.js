describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should render EmailForm Component", () => {
    cy.get('input[type="email"]').should("exist").and("be.visible");
    cy.get('input[type="email"]').should(
      "have.attr",
      "placeholder",
      "Email Address"
    );
    cy.screenshot("EmailForm");
  });

  it("Should move to RegistrationForm component after entering email", () => {
    cy.get('input[type="email"]').type("test@example.com");

    cy.get("button").contains("Enter").click();

    cy.get('input[placeholder="Name"]').should("exist").and("be.visible");
    cy.get('input[placeholder="Surname"]').should("exist").and("be.visible");
    cy.screenshot("RegistrationForm");
  });

  it("Should return to EmailForm component after clicking back to login", () => {
    cy.get('input[type="email"]').type("test@example.com");

    cy.get("button").contains("Enter").click();

    cy.contains("Back to Log in").click();

    cy.get('input[type="email"]').should("exist").and("be.visible");
  });

  it("Should proceed to verification form after registration", () => {
    cy.get('input[type="email"]').type("test@example.com");

    cy.get("button").contains("Enter").click();

    cy.get('input[placeholder="Name"]').type("test");
    cy.get('input[placeholder="Surname"]').type("test");

    cy.get('input[placeholder="Password"]').type("test@1234");
    cy.get('input[placeholder="New Password"]').type("test@1234");

    cy.get("button").contains("Enter").click();

    cy.get("input");
    cy.screenshot("ValidationForm");
  });
});
