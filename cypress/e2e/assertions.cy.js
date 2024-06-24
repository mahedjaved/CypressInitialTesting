// const cypress = require("cypress");
describe("Assertions demo", () => {
  it("Implicit assertions", () => {
    cy.visit("https://dribbble.com/search");
    // use implicit assertions:  a) should  b) and
    // check if URL contains "dribble.com"
    cy.url().should("include", "dribbble.com");

    // check if URL equals sth
    // cy.url().should("eq", "https://dribbble.com/search");

    // contains some part of url
    // cy.url().should("contain", "dribble");

    // compacting shoulds with and
    cy.url()
      .should("include", "dribbble.com")
      .and("contain", "dribbble")
      .and("eq", "https://dribbble.com/search");

    // neagtive assertions
    cy.url().should("not.contain", "dribblexx");

    // capture the title
    cy.title()
        .should("not.include", "DribbleXX")
        .and("not.eq", "OrangeH");

    // capture the logo, check if it is visible
    cy.get("a.nav-v2-logo")
      .should("be.visible")
      // or if it exists
      .and("exist");
  });
});
