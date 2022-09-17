describe('Update a teacher', () => {

  it('Edit name of the teacher', () => {
    cy.visit('http://localhost:7666')
    cy.get('#email').type('exempel@nodehill.com')
    cy.get('#password').type('abc123')
    cy.get('[type="submit"]').click()
    cy.visit('http://localhost:7666/admin')
    cy.get('.RaMenuItemLink-active').click()
    cy.visit('http://localhost:7666/admin/#/teachers')

    //Edit a teacher
    cy.get(':nth-child(20) > .column-undefined > .MuiButton-root').click({ force: true })
    cy.get('#firstname').clear()
    cy.get('#firstname').type('Spiderman3')
    cy.get('.RaToolbar-defaultToolbar > .MuiButton-contained').click({ force: true })
  })
})