
describe('Login for admin', () => {
  
  it('Admin loging in', () => {
    cy.visit('http://localhost:7666')
    cy.get('#email').type('exempel@nodehill.com')
    cy.get('#password').type('abc123')
    cy.get('[type="submit"]').click()
  })
})