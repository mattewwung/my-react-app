import App from '../src/App'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />);
    cy.wait(5000);
    cy.get('[data-cy="counter-button"]').as('counterButton')
    cy.get('@counterButton').should('have.text', 'count is 0');
    cy.wait(2000);
    for (let i = 0; i < 10; i++) {
      cy.get('@counterButton').click();
    }
    cy.get('@counterButton').should('have.text', 'count is 10');
  })
})