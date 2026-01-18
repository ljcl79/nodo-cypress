describe('Login - Usando Commands', () => {
    it("Verificar el login", () => {
        cy.login(Cypress.env('nombreUsuario'), Cypress.env('claveUsuario'));
        cy.url().should('eq', Cypress.config('baseUrl') + '/inventory.html');
    });
})