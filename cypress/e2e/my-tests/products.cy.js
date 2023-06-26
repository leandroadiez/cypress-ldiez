import { productPage } from '../../page-object/productPage'
import { homePage } from '../../page-object/homePage'
import { commonExport } from "../../common/commonExport"
import { commonPages } from '../../common/commonPages'

const productsList = require("../../fixtures/products.json")

describe('Interaction with Products', ()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.login(commonExport.users.standard)
    })

    it('User can open a specific product page - Sauce Labs Backpack', ()=>{
        homePage.openProductPage(productsList['Sauce Labs Backpack'])
        productPage.UICheckProductPage(productsList['Sauce Labs Backpack'])
    })
    it('User can add to cart from product page - Sauce Labs Backpack', ()=>{
        productPage.addToCart(productsList['Sauce Labs Backpack'])
        cy.get(commonPages.cartIcon).children('.shopping_cart_badge')
    })
    it('User can add to cart from home page', ()=>{
        //homePage.addToCart(productsList[''])
        //cy.get(commonPages.cartIcon).children('.shopping_cart_badge')
    })
    it('User can remove a product from product page - Sauce Labs Backpack', ()=>{
        productPage.addToCart(productsList['Sauce Labs Backpack'])
        productPage.removeItemFromCart(productsList['Sauce Labs Backpack'])
    })
    it('User can remove a product from home page', ()=>{
        //homePage.addToCart(productsList['Sauce Labs Backpack])
        //homePage.removeItemFromCart(productsList['Sauce Labs Backpack'])
    })
    it('User can go back to home page from product page', ()=>{
        homePage.openProductPage(productsList['Sauce Labs Backpack'])
        productPage.goBackToHomePage()
        cy.get(homePage.inventoryList).should('exist')
    })
})
