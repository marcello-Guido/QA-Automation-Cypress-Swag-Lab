import RemovePage from "../pages/removePage";
import LoginPage from "../pages/loginPage";
import AddPage from "../pages/addPage";
import dataUser from "../fixtures/dataUser.json"

const loginPage = new LoginPage()
const removePage = new RemovePage()
const addPage = new AddPage()


describe('Removendo itens do cart', () => {
    it('Remover item pela pagina do produto', () => {
        cy.visit('/')
        loginPage.loginFunction(dataUser.userSuccess.username, dataUser.userSuccess.password)
        addPage.addItem()
        removePage.removeItem()
    });

    it('Remover item pelo catalogo', () => {
        cy.visit('/')
        loginPage.loginFunction(dataUser.userSuccess.username, dataUser.userSuccess.password)
        addPage.addItemByCard()
        removePage.removeItemCataloge()

    });

    it('Remover item pelo cart', () => {
        cy.visit('/')
        loginPage.loginFunction(dataUser.userSuccess.username, dataUser.userSuccess.password)
        addPage.cartCheck('Sauce Labs Backpack', 'Sauce Labs Bike Light')
        removePage.removeItemCart()

    });




})