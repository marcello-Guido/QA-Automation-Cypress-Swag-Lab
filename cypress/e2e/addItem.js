import LoginPage from "../pages/loginPage";
import AddPage from "../pages/addPage";
import dataUser from "../fixtures/dataUser.json"

const loginPage = new LoginPage()
const addPage = new AddPage()

describe('Compra de produtos', () => {
    it('Adicionar 1 item a compra pela pagina', () => {
        // Adiciona um produto pela pagina do produto e valida se foi adicionado no carrinho pela quantidade e se o botão remover existe
        cy.visit('/')
        loginPage.loginFunction(dataUser.userSuccess.username, dataUser.userSuccess.password)
        addPage.addItem()
    });

    it('Adicionar 1 item a compra pelo card', () => {
        // Adiciona 1 produto na lista de catalogo e valida se foi adicionado no carrinho pela quantidade e se o botão remover existe
        cy.visit('/')
        loginPage.loginFunction(dataUser.userSuccess.username, dataUser.userSuccess.password)
        addPage.addItemByCard()
    });

    it('Adicionar mais itens a compra pelo card', () => {
        // Adiciona 2 produtos na lista de catalogo e valida se foi adicionado no carrinho pela quantidade e se o botão remover existe
        cy.visit('/')
        loginPage.loginFunction(dataUser.userSuccess.username, dataUser.userSuccess.password)
        addPage.addItensByCard()
    });

    it('Verificação do produto na pagina de cart', ()=>{
        cy.visit('/')
        loginPage.loginFunction(dataUser.userSuccess.username, dataUser.userSuccess.password)
        addPage.cartCheck('Sauce Labs Backpack', 'Sauce Labs Bike Light')
    });



})
