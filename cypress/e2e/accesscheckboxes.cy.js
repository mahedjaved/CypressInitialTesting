describe("Examining UI Elements, including radiobuttons and ", () => {
  // beforeEach runs preliminary commands before the test is executed
  beforeEach(() => {
    cy.visit("https://www.ironspider.ca/forms/checkradio.htm");
  });
  it("Checking checkbox buttons", () => {
    // check visibility of checkbox
    cy.get('input[name="color"]').eq(0).should("be.visible");

    // select single checkbox
    cy.get('input[name="color"]').eq(0).check();

    // check if it is checked
    cy.get('input[name="color"]').eq(0).should("be.checked");

    // and the rest unchecked
    cy.get('input[name="color"]').eq(1).should("not.be.checked");
    cy.get('input[name="color"]').eq(2).should("not.be.checked");
    cy.get('input[name="color"]').eq(3).should("not.be.checked");
    cy.get('input[name="color"]').eq(4).should("not.be.checked");

    // unselect checkbox
    cy.get('input[name="color"]').eq(0).uncheck();
    cy.get('input[name="color"]').eq(1).check();

    // check if red is unchecked and yellow is checked, find an attribute that is shared across all the sub-elements
    cy.get('input[name="color"]').eq(0).should("not.be.checked");
    cy.get('input[name="color"]').eq(1).should("be.checked");

    // check all checkboxes and uncheck
    cy.get('input[type="checkbox"][name="color"]').check();
    // cy.get('input[type="checkbox"][name="color"]').uncheck();
    cy.get('input[type="checkbox"][name="color"]').should("be.checked");
  });
});
