import LoginPage from "../pages/loginPage";
import AddPage from "../pages/addPage";
import dataUser from "../fixtures/dataUser.json";
import BuyPage from "../pages/buyPage";

const loginPage = new LoginPage()
const buyPage = new BuyPage()
const addPage = new AddPage()


describe('Removendo itens do cart', () => {
    it('Compra do produto e continue shopping', () => {
        cy.visit('/')
        loginPage.loginFunction(dataUser.userSuccess.username, dataUser.userSuccess.password)
        addPage.cartCheck('Sauce Labs Backpack', 'Sauce Labs Bike Light')
        buyPage.shopping(dataUser.checkout.firstname, dataUser.checkout.lastname, dataUser.checkout.zipcode)
    });
})