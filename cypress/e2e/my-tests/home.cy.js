//Export commonExport
import { productPage } from '../../page-object/productPage'
import { homePage } from '../../page-object/homePage'
import { commonExport } from "../../common/commonExport"
import { commonPages } from '../../common/commonPages'

const product = commonExport.productsList['Sauce Labs Backpack']

describe('Validate components that are present in all pages', ()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.login(commonExport.users.standard)
    })
    it('Validate sidebar elements', ()=>{
        const sidebarItems = cy.get(commonPages.sidebarList).children()
        cy.checkElementsExistButNotVisible(sidebarItems)
        cy.get(commonPages.sidebarBurger).click()
        cy.checkElementsAreVisible(sidebarItems)
        cy.get(commonPages.sidebarClose).click()
    })
    it('List of products is displayed', ()=>{

    })
    it.only('User can open a specific product page', ()=>{
        cy.get(homePage.inventoryList).find('.inventory_item').contains(product.title).click()
        
    })
    it('User can add to cart', ()=>{
        cy.addToCart(product)
        cy.get(product.removeBtn).should('be.visible')
        cy.checkItemAddedToCart(product)
    })
    it('User can remove from cart', ()=>{
        cy.addToCart(product)
        cy.removeFromCart(product)
        cy.get(product.cartBtn).should('be.visible')
    })
    it('User can sort inventory', ()=>{
        // inventory.sortBy(list, type)
        // inventory.checkSorted(list, type)
    })
})

