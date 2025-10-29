class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: '[data-test="username"]',
            passwordField: '[data-test="password"]',
            loginButton: '[data-test="login-button"]',
            messageError: '[data-test="error"]',
            successField: '[data-test="title"]'
        }
        return selectors
    }

    loginFunction(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
    assertSuccess(message) {
        cy.get(this.selectorsList().successField).should('have.text', message)
    }

    assert(message) {
        cy.get(this.selectorsList().messageError).should('have.text', message)
    }

    loginEmpty() {
        cy.get(this.selectorsList().loginButton).click()
    }

    loginPassEmpty(username) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().loginButton).click()

    }
    loginUserEmpty(password) {
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()

    }



}

export default LoginPage