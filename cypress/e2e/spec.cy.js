// first test
it("my first test", () => {
  // enter port for your application <-- actually with regards to sep of concerns, set main endpoint (BASE URL) in cypress.config.js and then place the appropriate domain below, obv. putting '/' will let you enter the main landing page
  cy.visit("/");
});
