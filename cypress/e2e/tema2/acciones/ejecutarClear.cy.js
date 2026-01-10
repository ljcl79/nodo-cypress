describe('Validando el formulario', () => {
    it('Validar que este la caja de mensaje', () => {
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.get('#formulario [name="email"]').type('ljcl79@gmail.com');
        cy.get('#fotos').select('Los Roques');
        cy.get('[name="notificaciones"]').check();
        cy.get('#email').clear();
        cy.get('#fotos').clear();
        cy.get('#email').should('have.text', 'ljcl79@gmail.com');
    })
})