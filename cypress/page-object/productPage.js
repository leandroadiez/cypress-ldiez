
import { homePage } from '../page-object/homePage'

const productsList = require("../fixtures/products.json")

class ProductPage {
    constructor() {
        this.title = '.inventory_details_name'
        this.image = '.inventory_details_img'
        this.backButton = '[data-test="back-to-products"]'
    }
    UICheckProductPage(product){
        cy.get(this.title).contains(product.title).should('exist')
        cy.get(this.image).should('have.attr', 'alt', product.title)
    }
    addToCart(product){
        homePage.openProductPage(product)
        cy.get(productsList[product.title].cartBtn).click()
    }
    removeItemFromCart(product){
        cy.get(product.removeBtn).click()
    }
    goBackToHomePage(){
        cy.get(this.backButton).click()
    }
}

export const productPage = new ProductPage()
