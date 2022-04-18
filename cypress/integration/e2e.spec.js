/// <reference types="cypress" />


describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('shows a message if there are no result', () => {
    const searchInput = 'random word';

    cy.get('[data-testid=search-input]').type(`${searchInput}{enter}`)
    cy.wait(1000)
    cy.get('h1')
      .should('have.text', 'No results, please review your search or try a different one')
  })

  it('shows an autocomplete suggestion', () => {
    const searchInput = 'alaba';

    cy.get('[data-testid=search-input]').type(`${searchInput}`)
    cy.wait(1000)
    cy.get('li')
      .should('have.text', 'Alabama')
  })

  it('renders the results', () => {
    const searchInput = 'alabama';

    cy.get('[data-testid=search-input]').type(`${searchInput}{enter}`)
    
    cy.wait(1000)
    cy.get('[data-testid=Person]')
      .its('length')
      .should('be.gt', 2)
  })
})
