import LogoutPage from "../pages/logoutPage";
import LoginPage from "../pages/loginPage";
import dataUser from "../fixtures/dataUser.json";

const logoutPage = new LogoutPage()
const loginPage = new LoginPage()


describe('Logout Screen', () => {
    it('Logout com sucesso', () => {
        cy.visit('/')
        // Fluxo de login
        loginPage.loginFunction(dataUser.userSuccess.username, dataUser.userSuccess.password)
        loginPage.assertSuccess(dataUser.messageLogin.messageLoginSuccess)
        // Fluxo de logout
        logoutPage.logout()
        logoutPage.assertLogout()
    });
})

