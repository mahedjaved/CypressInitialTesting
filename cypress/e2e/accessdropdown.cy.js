// / <reference types="Cypress" />
describe("Handle dropdowns", () => {
  it.skip("Accessing dropdowns with select", () => {
    // launch
    cy.visit("https://www.zoho.com/commerce/free-demo.html");

    // check if the dropdown elements are invisible before click event
    cy.get(
      '.menu > .first > .dropdown-menu a[href="/commerce/features/infrastructure.html"]'
    ).should("not.be.visible");

    // Click on the 'Features' dropdown to reveal its child elements
    cy.get(
      ".zw-product-header > .content-wrap > .product-nav-links > .menu > .first > .dropdown-toggle"
    ).click();

    // Check if the child elements are visible
    cy.get(
      '.menu > .first > .dropdown-menu a[href="/commerce/features/infrastructure.html"]'
    ).should("be.visible");
    cy.get(
      '.menu > .first > .dropdown-menu a[href="/commerce/features/pre-built-templates.html"]'
    ).should("be.visible");
    cy.get(
      '.menu > .first > .dropdown-menu a[href="/commerce/features/site-builder.html"]'
    ).should("be.visible");
    cy.get(
      '.menu > .first > .dropdown-menu a[href="/commerce/features/visual-editor.html"]'
    ).should("be.visible");
    cy.get(
      '.menu > .first > .dropdown-menu a[href="/commerce/features/multicurrency-support.html"]'
    ).should("be.visible");
    cy.get(
      '.menu > .first > .dropdown-menu a[href="/commerce/features/pages-and-files.html"]'
    ).should("be.visible");
    cy.get(
      '.menu > .first > .dropdown-menu a[href="/commerce/features/host-blogs.html"]'
    ).should("be.visible");
    cy.get(
      '.menu > .first > .dropdown-menu a[href="/commerce/features/product-filter.html"]'
    ).should("be.visible");
    cy.get(
      '.menu > .first > .dropdown-menu a[href="/commerce/features/message-bar.html"]'
    ).should("be.visible");
    cy.get(
      '.menu > .first > .dropdown-menu a[href="/commerce/features/manage-products.html"]'
    ).should("be.visible");
    cy.get(
      '.menu > .first > .dropdown-menu a[href="/commerce/features/product-categories-and-collections.html"]'
    ).should("be.visible");
    cy.get(
      '.menu > .first > .dropdown-menu a[href="/commerce/features/order-management.html"]'
    ).should("be.visible");
    cy.get(
      '.menu > .first > .dropdown-menu a[href="/commerce/features/manage-customers.html"]'
    ).should("be.visible");
    cy.get(
      '.menu > .first > .dropdown-menu a[href="/commerce/features/manage-users-and-roles.html"]'
    ).should("be.visible");
  });

  // dropdown without the select class
  it("Dropdown without select class", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    // select the drop down element
    cy.get('#billing_country_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow > b').click();
    // get the input field
    cy.get('.select2-search__field').type("Italy").type("{enter}");
    // check if the selection now contains the text ITALY
    cy.get('#select2-billing_country-container').should("have.text", "Italy");
  });
});


