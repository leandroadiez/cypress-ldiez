class LoginPage {
    constructor() {
        this.usernameInput = "#user-name"
        this.passwordInput = "#password"
        this.loginBtn = "#login-button"

        this.lockedMessage = '[data-test="error"]'
    }
}

export const loginPage = new LoginPage()



// elements = {
//     usernameInput: () => "#user-name",
//     passwordInput: () => cy.get('#password'),
//     loginButton: () => cy.get('#login-button')
// }