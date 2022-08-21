

describe('User Cart', () => {
  beforeEach(() => {
    cy.visit('/')

  })
  
  it('unauthenticated users have to login to access cart page', () => {
    cy.getBySel('to-cart').click()
    cy.location('pathname').should('equal', '/login')
  })

  it('unauthenticated users cant add items to cart', () => {
    cy.getBySel("grid-child-0").click()
    //get one element at any index and click on it
    cy.getBySel('products-canvas').eq(1).click()
    cy.getBySel('add-to-cart-button').click()
    cy.location('pathname').should('eq', '/login')
  })

})

context('authenticated user interactions with cart', () => {
  beforeEach(() => {
    cy.login('edmarfo2@gmail.com', 'minast1rith')
    cy.visit('/')
    cy.wait(3000) //mimics the loading state
    cy.getBySel('cart-total').find('span').invoke('text').as('initialCartValue')
    
  })
  
  it('can access the cart page', () => {
   
    cy.getBySel('to-cart').click()
    cy.location('pathname').should('equal', '/cart')
    
  })
  
  it('displays total cart items', () => {
    const session = 'edmarfo2@gmail.com'
    cy.intercept({ method: 'GET', url: `/api/v2/${session}` }).as('cartData')
    cy.visit('/')
      
    cy.wait('@cartData', { timeout: 4000 }).then(({ response }) => {
      const { products } = response.body.cart;
      //cy.log('res', products.length)
      cy.getBySel('cart-total').find('span').then(($span) => {
        //cy.log($span.text())
        
        expect(Number($span.text())).to.equal(products.length)
      })
    })
  })

  it('can add item to cart', function () {
    cy.getBySel("grid-child-0").click()
    //get one element at any index and click on it
    cy.getBySel('products-canvas').eq(2).click()
    cy.intercept('GET', 'https://fakestoreapi.com/products/*').as('product');
    cy.intercept('POST', '/api/v2/cart').as('addToCart')
    cy.wait('@product') //wait for product to be resolved from fakestoreApi otherwise would pass undefined 
    
    //expect(Number(this.initialCartValue)).to.equal(9)
    cy.getBySel('add-to-cart-button').click() // click add to cart button 
    cy.wait('@addToCart').then(({ response }) => {
      expect(response.statusCode).to.eq(200)
    })
  
  })

  //it.only('can ')

})
 
