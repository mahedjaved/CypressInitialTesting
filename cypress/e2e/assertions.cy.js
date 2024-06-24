// const cypress = require("cypress");
describe("Assertions demo", () => {
  it("Implicit assertions", () => {
    cy.visit("https://dribbble.com/search");
    // use implicit assertions:  a) should  b) and
    // check if URL contains "dribble.com"
    cy.url().should("include", "dribble.com");

    // check if URL equals sth
    // cy.url().should("eq", "https://dribbble.com/search");

    // contains some part of url
    // cy.url().should("contain", "dribble");

    // compacting shoulds with and
    cy.url()
      .should("include", "dribble.com")
      .and("contain", "dribble")
      .and("eq", "https://dribbble.com/search");
  });
});
