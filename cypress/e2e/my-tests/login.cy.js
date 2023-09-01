import { commonPages } from '../../common/commonPages'
import { loginPage } from "../../page-object/loginPage"
import { homePage } from '../../page-object/homePage'
import { commonExport } from "../../common/commonExport"



describe("Validate login with different users", () =>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Login with Standard user', ()=>{
        cy.login(commonExport.users.standard)
        cy.url().should('eq', homePage.url)
        cy.get(commonPages.logo).should('be.visible')
    })
    it('Login with Locked out user', ()=>{
        cy.login(commonExport.users.locked)
        cy.get(loginPage.lockedMessage).should('be.visible')
        cy.url().should('eq', loginPage.url)
    })
    it('Login with Problem user', ()=>{
        cy.login(commonExport.users.problem)
        cy.url().should('eq', homePage.url)
        cy.get(commonPages.logo).should('be.visible')
    })
    it('Login with Performance glitch user', ()=>{
        cy.login(commonExport.users.performance)
        cy.url().should('eq', homePage.url)
    })
})

