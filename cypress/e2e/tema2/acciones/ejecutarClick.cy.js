describe('Validando el formulario', () => {
    it('Validar que este la caja de mensaje', () => {
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.get('[data-cy="boton_enviar"]').click();
        cy.get('.contactenos').should('have.text', 'Formulario enviado!');
    })
})