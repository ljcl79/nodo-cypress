describe('Testing SauceDemo', () => {

    beforeEach(() => {
        cy.visit("/");
    })
    it('Login Standard', () => {
        cy.get('#user-name').type(Cypress.env('nombreUsuario'));
        cy.get('#password').type(Cypress.env('claveUsuario'));
        cy.get('[data-test="login-button"]').click();
        cy.url().should('eq', Cypress.config('baseUrl') + '/inventory.html')
    });

    it('Login Problem', () => {
        cy.get('#user-name').type('problem_user');
        cy.get('#password').type(Cypress.env('claveUsuario'));
        cy.get('[data-test="login-button"]').click();
        cy.url().should('eq', Cypress.config('baseUrl') + '/inventory.html')
    });
});