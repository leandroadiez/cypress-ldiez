import { productPage } from '../../page-object/productPage'
import { homePage } from '../../page-object/homePage'
import { commonExport } from "../../common/commonExport"
import { commonPages } from '../../common/commonPages'
import { cartPage } from '../../page-object/cartPage'

const product = commonExport.productsList['Sauce Labs Backpack']

describe('Interaction with Products', ()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.login(commonExport.users.standard)
    })

    it('Validate Product Page UI - Sauce Labs Backpack', ()=>{
        homePage.openProductPage(product)
        productPage.UICheckProductPage(product)
    })
    it('User can add to cart from product page - Sauce Labs Backpack', ()=>{
        cy.addToCart(product)
        cy.get(commonPages.cartIcon).children('.shopping_cart_badge')
    })
    it('User can remove a product from product page - Sauce Labs Backpack', ()=>{
        cy.addToCart(product)
        cy.removeFromCart(product)
        cy.get(commonPages.cartIcon).children('.shopping_cart_badge').should('not.exist')
    })
    it('User can go back to home page from product page', ()=>{
        homePage.openProductPage(product)
        productPage.goBackToHomePage()
        cy.get(homePage.inventoryList).should('exist')
    })
    it.only('Buy product', ()=>{
        homePage.openProductPage(product)
        cy.addToCart(product)
        cy.get(commonPages.cartIcon).click()
        cy.get(cartPage.checkoutBtn).click()
        cy.get('[data-test="firstName"]').type(commonExport.users.standard.username)
        cy.get('[data-test="lastName"]').type('Last name example')
        cy.get('[data-test="postalCode"]').type('7000')
        cy.get('[data-test="continue"]').click()
        cy.get('.inventory_item_name').contains(product.title)
        cy.get('.inventory_item_price').contains(product.price)
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('be.visible')
        cy.get('[data-test="back-to-products"]').click()
        cy.get(homePage.inventoryList).should('exist')
    })

})
