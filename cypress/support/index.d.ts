// describe custom Cypress commands in this file
// Import commands.js using ES2015 syntax:
import './commands'
import { CartState, store } from '../../src/cartStore'
import { UseStore } from 'zustand'
// load the global Cypress types
// load the 3rd party command definition for cy.waitUntil()
/**
 * This is to add zustand stores to the window object for testing 
 */
interface CustomWindow extends Window {
  store : UseStore<CartState>
}

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Window object with additional properties used during test. 
       */
      window(options?: Partial<Loggable & Timeoutable>): Chainable<CustomWindow>
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      /**Logs a user in
       * 
       */
      login(id: string, password: string): void
      /**
       * Get element by selector 
       * @param selector
       */
      getBySel(selector: string): Chainable<JQuery<HTMLElement>>
    }
  }
}