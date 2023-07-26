
import { homePage } from '../page-object/homePage'

const productsList = require("../fixtures/products.json")

class ProductPage {
    constructor() {
        this.title = '.inventory_details_name'
        this.image = '.inventory_details_img'
        this.backButton = '[data-test="back-to-products"]'
        this.description = '.inventory_details_desc'
        this.price = '.inventory_details_price'
    }
    UICheckProductPage(product){
        cy.get(this.backButton).should('be.visible')
        cy.get(this.title).contains(product.title).should('exist')
        cy.get(this.image).should('have.attr', 'alt', product.title)
        cy.get(this.description).contains(product.description).should('be.visible')
        cy.get(this.price).contains(product.price).should('be.visible')
        cy.get(product.cartBtn).should('be.visible')
    }
    // addToCart(product){
    //     cy.get(productsList[product.title].cartBtn).click()
    // }
    // removeItemFromCart(product){
    //     cy.get(product.removeBtn).click()
    // }
    goBackToHomePage(){
        cy.get(this.backButton).click()
    }
}

export const productPage = new ProductPage()
