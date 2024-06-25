describe("Handle dropdowns", () => {
  it("Accessing dropdowns with select", () => {
    // launch
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
   
    // check if the dropdown elements are invisible before click event
    cy.get('.menu > .first > .dropdown-menu a[href="/commerce/features/infrastructure.html"]').should("not.be.visible");

    // Click on the 'Features' dropdown to reveal its child elements
    cy.get('.zw-product-header > .content-wrap > .product-nav-links > .menu > .first > .dropdown-toggle').click();
    
    // Check if the child elements are visible
    cy.get('.menu > .first > .dropdown-menu a[href="/commerce/features/infrastructure.html"]').should("be.visible");
    cy.get('.menu > .first > .dropdown-menu a[href="/commerce/features/pre-built-templates.html"]').should("be.visible");
    cy.get('.menu > .first > .dropdown-menu a[href="/commerce/features/site-builder.html"]').should("be.visible");
    cy.get('.menu > .first > .dropdown-menu a[href="/commerce/features/visual-editor.html"]').should("be.visible");
    cy.get('.menu > .first > .dropdown-menu a[href="/commerce/features/multicurrency-support.html"]').should("be.visible");
    cy.get('.menu > .first > .dropdown-menu a[href="/commerce/features/pages-and-files.html"]').should("be.visible");
    cy.get('.menu > .first > .dropdown-menu a[href="/commerce/features/host-blogs.html"]').should("be.visible");
    cy.get('.menu > .first > .dropdown-menu a[href="/commerce/features/product-filter.html"]').should("be.visible");
    cy.get('.menu > .first > .dropdown-menu a[href="/commerce/features/message-bar.html"]').should("be.visible");
    cy.get('.menu > .first > .dropdown-menu a[href="/commerce/features/manage-products.html"]').should("be.visible");
    cy.get('.menu > .first > .dropdown-menu a[href="/commerce/features/product-categories-and-collections.html"]').should("be.visible");
    cy.get('.menu > .first > .dropdown-menu a[href="/commerce/features/order-management.html"]').should("be.visible");
    cy.get('.menu > .first > .dropdown-menu a[href="/commerce/features/manage-customers.html"]').should("be.visible");
    cy.get('.menu > .first > .dropdown-menu a[href="/commerce/features/manage-users-and-roles.html"]').should("be.visible");
  });
});
