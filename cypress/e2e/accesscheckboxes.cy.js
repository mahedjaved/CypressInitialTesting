describe("Examining UI Elements, including radiobuttons and ", () => {
    it("Checking radio buttons", () => {
      cy.visit("https://materializecss.com/radio-buttons.html");
      // check whether radio button is visible or not
      cy.get(":nth-child(1) > label > span").should("be.visible");
      cy.get(":nth-child(2) > label > span").should("be.visible");
      cy.get(":nth-child(3) > label > span").should("be.visible");
      cy.get(":nth-child(4) > label > span").should("be.visible");
  
      // selecting radio buttons, firstly select the first radio button
      cy.get('label > input[name="group1"][type="radio"]')
        .eq(2)
        .check({ force: true });
      // now check if it is selected, and others are deselected
      cy.get('label > input[name="group1"][type="radio"]')
        .eq(2)
        .should("be.checked");
      cy.get('label > input[name="group1"][type="radio"]')
        .eq(0)
        .should("not.be.checked");
      cy.get('label > input[name="group1"][type="radio"]')
        .eq(1)
        .should("not.be.checked");
      cy.get('label > input[name="group1"][type="radio"]')
        .eq(3)
        .should("not.be.checked");
    });
  });
  