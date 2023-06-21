describe("Suite for Table Tests. Statics and dynamics", ()=>{
    beforeEach(()=>{
        cy.visit('https://chercher.tech/practice/dynamic-table')
    })

    it('Validate text in dynamic table', () => {
        cy.contains('td', 'facebook.com').prev().find('input').check()
    })

    
    it('Validate text in static table', () => {
        cy.contains('td', 'Chercher.tech').next().should('have.text', 'Future Technologies')
    })

}) 