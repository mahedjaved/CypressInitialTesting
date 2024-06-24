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
    cy.title().should("not.include", "DribbleXX").and("not.eq", "OrangeH");

    // capture the logo, check if it is visible
    cy.get("a.nav-v2-logo")
      .should("be.visible")
      // or if it exists
      .and("exist");

    // check how many links are present within the page, normally using XPATH to capture links, //a means every tag with link element
    cy.xpath("//a").should("not.have.length", "3");

    // validate some value of an element, e.g. if you have added some field in form
    cy.get("#search").type("T-Shirts");
    cy.get("#search").should("have.value", "T-Shirts");
  });

  it("Explicit assertions", () => {
    // these are NOT built-in assertions, these are custom
    cy.visit("https://dribbble.com/search");

    let expectedName = "T-Shirts";

    cy.get("#search").type(expectedName);

    // use explicit functional declaration to find the element
    cy.get("#search").then((x) => {
      let actualName = x.val();

      // BDD Style
      expect(actualName).to.equal(expectedName);
      expect(actualName).to.not.equal("T-shirties");

      // TDD Style
      assert.equal(actualName, expectedName);
      assert.notEqual(actualName, "T-shirties");
    });
  });
});
