class RemovePage {
    selectorsList() {
        const selectors = {
            removeButton: "[data-test='remove']",
            addButton: "[data-test='add-to-cart']",
            removeItemOne: "[data-test='remove-sauce-labs-backpack']",
            removeItemTwo: "[data-test='remove-sauce-labs-bike-light']",
            addButtomOne: "[data-test='add-to-cart-sauce-labs-backpack']",
            selectItemCart: "[data-test='inventory-item']"
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

    removeItemCart() {
        cy.get(this.selectorsList().removeItemOne).click()
        cy.get(this.selectorsList().removeItemTwo).click()

        cy.get(this.selectorsList().selectItemCart).should('not.exist')
    }
}

export default RemovePage