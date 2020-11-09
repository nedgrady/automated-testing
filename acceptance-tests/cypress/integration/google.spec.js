/// <reference types="cypress" />
describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
});

// TODO 4 - How to check our search term is cleared when we go home





/* 
describe('Searching Google', () => {
    it('Shows our search term on the results page', () => {
        cy.visit('/')
        cy.get('#search_form_input_homepage')
            .type('Some Search Term{enter}')

        cy.get('#search_form_input').should('have.value', "Some Search Term")
    })
})

*/
