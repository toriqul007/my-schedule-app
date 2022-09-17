describe('Delete a teacher from the list', () => {

  it('Teacher deleted', () => {
    cy.visit('http://localhost:7666')
    cy.get('#email').type('exempel@nodehill.com')
    cy.get('#password').type('abc123')
    cy.get('[type="submit"]').click()
    cy.visit('http://localhost:7666/admin')
    cy.get('.RaMenuItemLink-active').click()
    cy.visit('http://localhost:7666/admin/#/teachers')

    //Delete a teacher
    cy.get(':nth-child(20) > .MuiTableCell-paddingCheckbox > .MuiCheckbox-root > .PrivateSwitchBase-input').click({ force: true })
    cy.get('[data-test="bulk-actions-toolbar"] > .MuiToolbar-root > .MuiButton-root').click({ force: true })

  })
})

    

  
