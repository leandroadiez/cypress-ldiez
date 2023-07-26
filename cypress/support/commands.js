import { loginPage } from "../page-object/loginPage"
import { commonExport } from "../common/commonExport"
import { commonPages } from "../common/commonPages"
import { cartPage } from "../page-object/cartPage"

Cypress.Commands.add('login', (user) => {
    cy.get(loginPage.usernameInput).type(user.username)
    cy.get(loginPage.passwordInput).type(user.password)
    cy.get(loginPage.loginBtn).click()
})

Cypress.Commands.add('checkElementExistButNotVisible', (element) => {
    cy.get(element).should('exist')
    cy.get(element).should('not.be.visible')
})

Cypress.Commands.add('checkElementsExistButNotVisible', (list)=>{
    list.each((element)=>{
        cy.log(element)
        cy.get(element).should('exist')
        cy.get(element).should('not.be.visible')
    })
})

Cypress.Commands.add('checkElementsAreVisible', (list)=>{
    list.each((element)=>{
        cy.log(element)
        cy.get(element).should('be.visible')
    })
})

Cypress.Commands.add('addToCart', (product)=>{
    cy.get(commonExport.productsList[product.title].cartBtn).click()
})

Cypress.Commands.add('removeFromCart', (product)=>{
    cy.get(commonExport.productsList[product.title].removeBtn).click()
})

Cypress.Commands.add('checkItemAddedToCart', (product)=>{
    cy.get(commonPages.cartIcon).click()
    cy.get(cartPage.cartItem).contains(product.title)
    
})


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })