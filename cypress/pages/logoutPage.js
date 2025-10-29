class LogoutPage {
    selectorsList(){
        const selectors = {
            menuButton: '[type="button"]',
            logoutLink: '[data-test="logout-sidebar-link"]'
        }
        return selectors
    }

    logout(){
        cy.get(this.selectorsList().menuButton).first().click()
        cy.get(this.selectorsList().logoutLink).click()
    }

    assertLogout(){
        cy.url().should('eq', 'https://www.saucedemo.com/')
        
    }


}

export default LogoutPage