describe('Validando el login', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Login de usuarios', () => {
        cy.get('[data-cy="link_login"]').click();
        cy.fixture('usuarios.json').then((usuarios) => {
            cy.get('#email').type(usuarios.user1.email);
            cy.get('#password').type(usuarios.user1.password);
        });

        cy.get('[data-cy="login_btn"]').click();
        cy.get('[data-cy="profile_link"]').should('be.visible');
    });
});