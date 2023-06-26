//Export commonExport
import { productPage } from '../../page-object/productPage'
import { homePage } from '../../page-object/homePage'
import { commonExport } from "../../common/commonExport"
import { commonPages } from '../../common/commonPages'


describe('Validate components that are present in all pages', ()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.login(commonExport.users.standard)
    })
    it('Validate sidebar', ()=>{
        cy.get('#react-burger-menu-btn').click()
    })
})

