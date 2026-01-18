import { loginPage } from "../pages/login.Page.js";

describe('Testing SauceDemo - aplicando POM', () => {

    beforeEach(() => {
        cy.visit("/");
    })

    it("Login Standard User", () => {
        loginPage.hacerLogin(Cypress.env('nombreUsuario'), Cypress.env('claveUsuario'));
        cy.url().should('eq', Cypress.config('baseUrl') + '/inventory.html');
    });

    it("Login Standard User", () => {
        loginPage.hacerLogin('problem_user', 'clave');
        cy.url().should('eq', Cypress.config('baseUrl') + '/inventory.html');
    });


});