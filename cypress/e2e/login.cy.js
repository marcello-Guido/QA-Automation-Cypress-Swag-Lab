import dataUser from '../fixtures/dataUser.json';
import LoginPage from '../pages/loginPage';

const loginPage = new LoginPage()

describe('Login Screen', () => {

  it('Login com credenciais válidas', () => {
    cy.visit('/')
    loginPage.loginFunction(dataUser.userSuccess.username, dataUser.userSuccess.password)
    loginPage.assertSuccess(dataUser.messageLogin.messageLoginSuccess)
  });

  it('Login com credenciais inexistente', () => {
    cy.visit('/')
    loginPage.loginFunction(dataUser.userFail.username, dataUser.userFail.password)
    loginPage.assert(dataUser.messageLogin.messageInvalid)
  });

  it('Login com senha errada', () => {
    cy.visit('/')
    loginPage.loginFunction(dataUser.userSuccess.username, dataUser.userFail.password)
    loginPage.assert(dataUser.messageLogin.messageInvalid)
  });

  it('Login com usuario errado', () => {
    cy.visit('/')
    loginPage.loginFunction(dataUser.userFail.username, dataUser.userSuccess.password)
    loginPage.assert(dataUser.messageLogin.messageInvalid)
  });

  it('Login sem/vazias credenciais', () => {
    cy.visit('/')
    loginPage.loginEmpty()
    loginPage.assert(dataUser.messageLogin.messageEmpty)
  });

  it('Login user vazio', () => {
    cy.visit('/')
    loginPage.loginUserEmpty(dataUser.userSuccess.password)
    loginPage.assert(dataUser.messageLogin.messageEmpty)
  });

  it('Login password vazio', () => {
    cy.visit('/')
    loginPage.loginPassEmpty(dataUser.userSuccess.username)
    loginPage.assert(dataUser.messageLogin.messagePassEmpty)
  });

})