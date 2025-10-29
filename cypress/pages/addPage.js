class AddPage {
    selectorslist() {
        const selectors = {
            inventoryItem: '[data-test="inventory-item"]',
            addButton: '[data-test="add-to-cart"]',
            clickCard: '.inventory_item_img',
            cartNumber: '[data-test="shopping-cart-badge"]',
            oneButtonAddItem: "[data-test='add-to-cart-sauce-labs-backpack']",
            twoButtonAddItem: '[data-test="add-to-cart-sauce-labs-bike-light"]',
            removeButtonOneCard: "[data-test='remove-sauce-labs-backpack']",
            removeButtonTwoCard: "[data-test='remove-sauce-labs-bike-light']",
            itemNameCart: "[data-test='inventory-item-name']",
            cartLink: "[data-test='shopping-cart-link']"
        }
        return selectors

    }

    addItem() {
        cy.get(this.selectorslist().inventoryItem).then(($itens) => {
            const total = $itens.length

            cy.log(`DEBUG: tipo de total = ${typeof total}, valor = ${total}`)
            console.log('Itens encontrados:', $itens)
            console.log('Total:', total)

            if (total > 0) {
                cy.get(this.selectorslist().clickCard).first().click()
                cy.get(this.selectorslist().addButton).click()
                cy.get(this.selectorslist().cartNumber).should('have.text', '1')
            } else {
                cy.log(`Nenhum produto disponível no catálogo.`)
            }
        })
    }

    addItemByCard() {
        cy.get(this.selectorslist().inventoryItem).then(($itens) => {
            const total = $itens.length

            if (total > 0) {
                cy.get(this.selectorslist().oneButtonAddItem).click()
                cy.get(this.selectorslist().cartNumber).should('have.text', '1')
                cy.get(this.selectorslist().removeButtonOneCard).should('be.visible')

            } else {
                cy.log(`Nenhum produto disponível no catálogo.`)
            }

        })

    }

    addItensByCard() {
        cy.get(this.selectorslist().inventoryItem).then(($itens) => {
            const total = $itens.length

            if (total > 0) {
                cy.get(this.selectorslist().oneButtonAddItem).click()
                cy.get(this.selectorslist().twoButtonAddItem).click()

                cy.get(this.selectorslist().cartNumber).should('have.text', '2')
                cy.get(this.selectorslist().removeButtonOneCard).should('be.visible')
                cy.get(this.selectorslist().removeButtonTwoCard).should('be.visible')
               

            } else {
                cy.log(`Nenhum produto disponível no catálogo.`)
            }

        })

    }

    cartCheck(product1, product2) {
        cy.get(this.selectorslist().inventoryItem).then(($itens) => {
            const total = $itens.length

            if (total > 0) {
                cy.get(this.selectorslist().oneButtonAddItem).click()
                cy.get(this.selectorslist().twoButtonAddItem).click()

                cy.get(this.selectorslist().cartNumber).should('have.text', '2')
                cy.get(this.selectorslist().removeButtonOneCard).should('be.visible')
                cy.get(this.selectorslist().removeButtonTwoCard).should('be.visible')

                cy.get(this.selectorslist().cartLink).click()
                cy.get(this.selectorslist().itemNameCart).eq(0).should('have.text', product1)
                cy.get(this.selectorslist().itemNameCart).eq(1).should('have.text', product2)

               

            } else {
                cy.log(`Nenhum produto disponível no catálogo.`)
            }

        })

    }
}

export default AddPage