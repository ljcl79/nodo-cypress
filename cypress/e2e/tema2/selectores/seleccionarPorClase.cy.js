describe('Validando el encabezado', () => {
    it('Validar que el encabezado tengo el texto correcto', () => {
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.get('.texto-encabezado').contains('Mi primer sitio web usando IA');
    })
})