/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
    Cypress.Commands.add('getBySel', (selector: string) => {
       return cy.get(`[data-test=${selector}]`)
    })
   
Cypress.Commands.add("login", (id: string, password: string) => {

    cy.session('test-user', () => {
      cy.visit('/login')
      
      cy.get('#Id').type(`${id}`)
      cy.getBySel("continue-button").click()
      cy.get('#password').type(`${password}`)
      cy.getBySel('login').click()
        cy.url().should("contain", 'http://localhost:3000/')
      cy.getBySel("login-user").should('have.text', `Hello , Edmond Marfo`)

        cy.wait(5000)
        cy.getCookie('next-auth.session-token').should('exist')
    })
    
    })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
export {}