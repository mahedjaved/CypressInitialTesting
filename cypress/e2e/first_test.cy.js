describe('template spec', () => {
  it('test1-verify title-positive', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq', 'OrangeHRM')
  })

  it('test1-verify title-negative', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq', 'NotOrangeHRM')
  })

})