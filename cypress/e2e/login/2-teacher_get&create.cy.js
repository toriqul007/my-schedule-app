describe('Get-teachers-list', () => {
 
  it('Show the list of the teachers', () => {
    cy.visit('http://localhost:7666')
    cy.get('#email').type('exempel@nodehill.com')
    cy.get('#password').type('abc123')
    cy.get('[type="submit"]').click()
    cy.visit('http://localhost:7666/admin')
    cy.get('.RaMenuItemLink-active').click()
    cy.visit('http://localhost:7666/admin/#/teachers')

    //create a teacher
    cy.get('.MuiToolbar-root > a.MuiButton-root').click()
    cy.get('#firstname').type('Spiderman')
    cy.get('#lastname').type('Parker')
    cy.get('#initials').type('SP')
    cy.get('#phone').type('0701234567')
    cy.get('#email').type('test@test.com')
    cy.get('#color').type('#000000')
    cy.get('#password').type('12345')
    cy.get('#roles').type('user')
    cy.get('.RaToolbar-defaultToolbar > .MuiButton-root').click()
    cy.visit('http://localhost:7666/admin/#/teachers')

    

   
  })
})