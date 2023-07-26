class HomePage {
    constructor() {
        this.url = 'https://www.saucedemo.com/inventory.html'
        this.sortDropdown = '[data-test="product_sort_container"]'
        this.productsTitle = 'Products'
        this.productTitle = '.inventory_item_name'
        this.inventoryList = '.inventory_list'
    }
    openProductPage(product){
        cy.get(this.productTitle).contains(product.title).click()
    }

    removeCurrency(array){
        for (var i = 0; i < array.length; i++) {
            var pricex = array[i].innerHTML;
            var pricex = pricex.replace(/\$ /g, "");
            array[i].innerHTML = price;
        }
    }
}

export const homePage = new HomePage()



// elements = {
//     usernameInput: () => "#user-name",
//     passwordInput: () => cy.get('#password'),
//     loginButton: () => cy.get('#login-button')
// }