describe('empty spec', () => {
  beforeEach(() => {
     cy.visit('/');
  })
  it('product links redirect to desired url', () => {
   
    cy.getBySel("grid-child-0").find('a').first().click() 
    cy.url().should('eq', 'http://localhost:3000/products/AmazonBasics')
     //.should('have.text', 'AmazonBasics')
  })

  it('redirects you to the login page', () => {
    cy.getBySel("to-login-card").should('have.text', 'Sign in securely')
      .click()
       cy.url().should('eq', 'http://localhost:3000/login')
  })

  it.only('all login links redirect to /login', () => {
     
   })
  
})