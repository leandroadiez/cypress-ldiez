describe('Validaciones implicitas y explicitas', ()=>{
    beforeEach(()=>{
        cy.visit('https://staging.clickup.com/')
        cy.fixture('users.json').then((user) => {
            cy.login(user.name, user.password)
       })
    })

    it('Validaciones implicitas ', ()=>{
        cy.wait(10000)
        cy.get('[data-pendo="simple-bar-item-inbox"] > .cu-simple-bar__item-label').click()
        cy.wait(10000)
        cy.get('[class="bundles-list"]').find('button').then(($button) => {
            cy.log("xxxxxxxxx"+$button)
        })


          
        //cy.get('h3').should('have.text', 'Inputs')
        //cy.get('.example').should('have.class', 'example').and('be.visible')
        //cy.log(cy.contains('Inputs'))
    })

})