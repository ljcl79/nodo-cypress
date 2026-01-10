describe('Validando el formulario', () => {
    it('Validar que existe la caja de email dentro del formulario', () => {
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.get('#formulario [name="email"]').type('ljcl79@gmail.com');
    })
})
