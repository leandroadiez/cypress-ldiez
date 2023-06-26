import {loginPage} from "../page-object/loginPage"

Cypress.Commands.add('login', (user) => {
    cy.get(loginPage.usernameInput).type(user.username)
    cy.get(loginPage.passwordInput).type(user.password)
    cy.get(loginPage.loginBtn).click()
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