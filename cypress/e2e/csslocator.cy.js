describe("CSSLocators", () => {
  it("css locators test", () => {
    // first launch the website
    cy.visit("https://dribbble.com/search");
    cy.get("#search").type("T-Shirts{enter}");
    // cy.get("h1#search-results-heading").contains("t shirts");
    cy.get("h1.search-results-heading").contains("t shirts");
  });
});

// npm install -D cypress-xpath
