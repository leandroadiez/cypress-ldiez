

describe('Validaciones implicitas y explicitas', ()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/')
        
        //cy.get(':nth-child(38) > a').as('ShadowElement')

        cy.fixture('users.json').then((user) => {
            let name = user.name
            cy.log("ddddddddd"+name)
       })
    
    })

    it('Validaciones implicitas ', ()=>{
        cy.contains('Inputs').click()
        cy.get('h3').should('have.text', 'Inputs')
        cy.get('.example').should('have.class', 'example').and('be.visible')
        cy.log(cy.contains('Inputs'))
    })
    it('Validaciones explicitas ', ()=>{
        cy.contains('Inputs').click()
        cy.get('h3')
        expect('Inputs').to.equals('Inputs')
    })
    it('There are 56 elements in the list', ()=>{
        cy.get(':nth-child(1)').should('have.length', 56)
    })

    it('Check the class of the element B', () => {
        cy.contains('Drag and Drop').click()
        cy.get('#column-b').should('have.class', 'column')
    })

    it('Should have text and be visible', () => {
        cy.get('.heading').should('have.text', 'Welcome to the-internet').and('be.visible')
    })

    it('Should not be checked', () => {
        cy.get(':nth-child(6) > a').debug().click()
        cy.get('#checkboxes > :nth-child(1)').should('not.be.checked').and('be.enabled')
        cy.url().should('contain', '/checkbox')
    })

    it('Should exist in Checkbox Page and be enabled', () => {
        cy.get(':nth-child(6) > a').click()
        cy.get('.large-4 > div > a').should('exist')
    })

    it('Multiple windows - Remove target attribute', () => {
        cy.wait(500)
        cy.contains('Multiple Windows').click()
        cy.contains('Click Here').invoke('removeAttr', 'target').click()
    })

    // it('Shadow DOM', () => {
    //     cy.get(':nth-child(38) > a').click()
    //     cy.get('ul > :nth-child(2)').shadow().should('have.text', 'In a list!')
    // })

    it('Dynamic content', () => {
        cy.get(':nth-child(12) > a').click()
        cy.get('img').eq(2).should('be.visible')
    })

    it('Padres e hijos', () => {
        cy.contains('Dynamic Content').click()
        cy.get('.example').parent().should('be.visible')
        cy.get('.example').children().should('be.visible')
    })

    it('Invoke', () => {
        cy.contains('Dynamic Content')
        .should('be.visible')
        .invoke('hide')
        .should('be.hidden')
    })
    it.only('Test con el chispa', ()=>{
        cy.contains('Checkboxes').click()
        cy.get('#checkboxes').find('input').then(($input) => {
            expect($input).to.have.length(2)
            
            cy.log($input[0].onclick)
            //cy.log($input[1].baseURI)
            // const className = $div[0].className
           
  
            // expect(className).to.match(/heading-/)
          })
    })
})