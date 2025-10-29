class RemovePage {
    selectorsList() {
        const selectors = {
            removeButton: "[data-test='remove']",
            addButton: "[data-test='add-to-cart']",
            removeItemOne: "[data-test='remove-sauce-labs-backpack']",
            addButtomOne: "[data-test='add-to-cart-sauce-labs-backpack']"
        }

        return selectors
    }


    removeItem() {
        cy.get(this.selectorsList().removeButton).click()
        cy.get(this.selectorsList().addButton).should('be.visible')
    }

    removeItemCataloge() {
        cy.get(this.selectorsList().removeItemOne).click()
        cy.get(this.selectorsList().addButtomOne).should('be.visible')
    }
}

export default RemovePage