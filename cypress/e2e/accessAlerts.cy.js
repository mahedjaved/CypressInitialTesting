// / <reference types="Cypress" />
describe("Alerts", () => {
  it("JS Alerts", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    // click on the activate alert button
    cy.get("button[onclick='jsAlert()']").click();
    // trigger alert event and check if it has the desired message
    cy.on("window:alert", (t) => {
      expect(t).to.contain("I am a JS Alert");
    });
    cy.get('#result').should("have.text", "You successfully clicked an alert");
  });
});

// https://the-internet.herokuapp.com/javascript_alerts
