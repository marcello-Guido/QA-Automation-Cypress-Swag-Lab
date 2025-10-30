class BuyPage {
    selectorsList() {
        const selectors = {
            continueShoppingButton: "[data-test='continue-shopping']",
            addItemCardthree: "[data-test='add-to-cart-sauce-labs-bolt-t-shirt']",
            cartNumber: "[data-test='shopping-cart-badge']",
            cartLink: "[data-test='shopping-cart-link']",
            itemNameCart: "[data-test='inventory-item-name']",
            checkoutLink: "[data-test='checkout']",
            firstNameField: "[data-test='firstName']",
            lastNameField: "[data-test='lastName']",
            zipCodeField: "[data-test='postalCode']",
            continueBuyButton: "[data-test='continue']",
            finishButton: "[data-test='finish']",
            cancelButton: "[data-test='cancel']",
            succesBuy: "[data-test='complete-header']",
            backHomeButton: "[data-test='back-to-products']"

        }
        return selectors
    }

    shopping(name, last, code) {
        cy.get(this.selectorsList().continueShoppingButton).click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.get(this.selectorsList().addItemCardthree).click()
        cy.get(this.selectorsList().cartNumber).should('have.text', '3')
        cy.get(this.selectorsList().cartLink).click()
        
        cy.get(this.selectorsList().checkoutLink).click()

        cy.get(this.selectorsList().firstNameField).type(name)
        cy.get(this.selectorsList().lastNameField).type(last)
        cy.get(this.selectorsList().zipCodeField).type(code)

        cy.get(this.selectorsList().continueBuyButton).click()
        
        cy.get(this.selectorsList().finishButton).click()

        cy.get(this.selectorsList().succesBuy).should('exist')

        cy.get(this.selectorsList().backHomeButton).click()
         cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

    }
}

export default BuyPage