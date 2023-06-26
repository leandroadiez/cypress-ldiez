import { commonPages } from '../../common/commonPages'
import { loginPage } from "../../page-object/loginPage"
import { commonExport } from "../../common/commonExport"

describe("Validate login with different users", () =>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/")
    })
    it('Login with Standard user', ()=>{
        cy.login(commonExport.users.standard)
        cy.get(commonPages.logo).should('be.visible')
    })

    it('Login with Locked user', ()=>{
        cy.login(commonExport.users.locked)
        cy.get(loginPage.lockedMessage).should('be.visible')
    })

    it('Login with Problem user', ()=>{
        cy.login(commonExport.users.problem)
        cy.get(commonPages.logo).should('be.visible')

        //Hacer que problem tenga un assert especial
    })
})

