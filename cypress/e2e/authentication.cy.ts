


describe('Authentication Tests', () => {
  
  it('it logs in an authenticated user', () => {
    
     cy.login('edmarfo2@gmail.com', 'minast1rith')
    cy.visit('/')
   
   
  })

  it('displays password error message', () => {
    cy.visit('/login')
    cy.get('#Id').type('edmarfo2@gmail.com')
      cy.getBySel("continue-button").click()
    cy.get('#password').type('dfafadaf')
      cy.getBySel('login').click()

    cy.getBySel('server-error').should('exist').should("have.text", 'Invalid Password')
  })

  it('displays invalid credentials error', () => {
    cy.visit('/login')
    cy.get('#Id').type('edmarfo@gmail.com')
      cy.getBySel("continue-button").click()
    cy.get('#password').type('minast1rith')
      cy.getBySel('login').click()

    cy.getBySel('server-error').should('exist').should("have.text", 'Invalid Username and Password combination!')
  })

  it('displays duplicate emeail error message', () => {
    cy.visit('/login')
   
    cy.getBySel('to-register').click()
    cy.getBySel('name').type('dffdfadf')
        cy.getBySel('email').type('edmarfo2@gmail.com')
    cy.getBySel('phone').type('0265845931')
    cy.getBySel('password').type('dffdfadf')
        cy.getBySel('passwordconfirm').type('dffdfadf')



    cy.get('.MuiButton-label').click()
    cy.getBySel('signup-error').should('exist').should('contain.text', 'Email exists already!')
  })

  it('displays duplicate phone number error message', () => {
    cy.visit('/login')
   
    cy.getBySel('to-register').click()
    cy.getBySel('name').type('dffdfadf')
        cy.getBySel('email').type('edmarfo3@gmail.com')
    cy.getBySel('phone').type('0265845930')
    cy.getBySel('password').type('dffdfadf')
        cy.getBySel('passwordconfirm').type('dffdfadf')



    cy.get('.MuiButton-label').click()
    cy.getBySel('signup-error').should('exist').should('contain.text', 'Phone Number exists alrready')
  })

  it('registers a new user', () => {
         cy.visit('/login')
         cy.getBySel('to-register').click()
    cy.intercept('/api/auth/signUp').as('register')


    cy.getBySel('name').type('cypress user')
        cy.getBySel('email').type('cypress@gmail.com')
    cy.getBySel('phone').type('0265845932')
    cy.getBySel('password').type('cypress1')
        cy.getBySel('passwordconfirm').type('cypress1')
        cy.get('.MuiButton-label').click()

    cy.wait('@register').then((interception) => {
     //do something with interception response 
      expect(interception.response?.body).property('email').to.be.equal('cypress@gmail.com')
     

    })
    cy.location('pathname').should('eq', '/')
    cy.getBySel("login-user").should('have.text', 'Hello , cypress user')
     cy.getCookie('next-auth.session-token').should('exist')
  })

  it('logs out an authenticated user', () => {
    cy.login('edmarfo2@gmail.com', 'minast1rith')
    cy.visit('/')
    cy.getBySel('dropdown').click()
    cy.getBySel('signout').should('be.visible').click()
    cy.getBySel("login-user").should('have.text', 'Hello , Sign in')

    cy.getCookie('nex-auth.session-token').should('not.exist')
    
  })
})

export {}