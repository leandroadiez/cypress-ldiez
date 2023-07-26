class CartPage {
    constructor() {
        this.cartList = '.cart_list'
        this.cartItem = '.cart_item'
        this.checkoutBtn = '[data-test="checkout"]'
    }
}

export const cartPage = new CartPage()
