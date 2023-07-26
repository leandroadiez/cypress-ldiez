class CommonExport {
    constructor() {
        this.users = require('../fixtures/users.json')
        this.productsList = require('../fixtures/products.json')
    }
}
export const commonExport = new CommonExport()
