import { Given, And, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("that I am logged in as admin", () => {
  cy.visit(Cypress.env('baseUrl'))
  cy.get('#email').type(Cypress.env('email'))
  cy.get('#password').type(Cypress.env('password'))
  cy.get('[type="submit"]').click()

})

And("I am on the admin page", () => {
  cy.visit(Cypress.env('adminUrl'))
  
})

When("I click on Teachers", () => {
  cy.get('.RaMenuItemLink-active').click()
  
})

Then("I should see the list of teachers", () => {
  cy.visit('/admin/#/teachers')

})

And("I click on create teacher", () => {
  cy.get('.MuiToolbar-root > a.MuiButton-root').click()

})

Then ("I should be able to add a teacher", () => {
  cy.get('#firstname').type('Spiderman')
  cy.get('#lastname').type('Parker')
  cy.get('#initials').type('SP')
  cy.get('#phone').type('0701234567')
  cy.get('#email').type('test@test.com')
  cy.get('#color').type('#000000')
  cy.get('#password').type('12345')
  cy.get('#roles').type('user')
  cy.get('.RaToolbar-defaultToolbar > .MuiButton-root').click()
  cy.visit('/admin/#/teachers')

})

And("I click on edit button", () => {
  cy.get(':nth-child(20) > .column-undefined > .MuiButton-root').click({ force: true })
  
})

Then("I should be able to edit a teacher", () => {
  cy.get('#firstname').clear()
  cy.get('#firstname').type('Spiderman3')
  cy.get('.RaToolbar-defaultToolbar > .MuiButton-contained').click({ force: true })
  cy.visit('/admin/#/teachers')

})

When("I click on a Teacher", () => {
  cy.get(':nth-child(20) > .MuiTableCell-paddingCheckbox > .MuiCheckbox-root > .PrivateSwitchBase-input').click({ force: true })

})

And("I click on delete button", () => {
  cy.get('[data-test="bulk-actions-toolbar"] > .MuiToolbar-root > .MuiButton-root').click({ force: true })
  
})

Then("I should be able to delete a teacher", () => {
  cy.visit('/admin/#/teachers')

})






