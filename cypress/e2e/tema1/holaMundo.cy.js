describe('Validación de contenidos del site', () => {
    it('Validar la ciudad de Santigo', () => {
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.contains('Santiago');
    });


    it('Validar la ciudad de Buenos Aires', () => {
        cy.visit('https://ljcl79.github.io/primera-pagina-ia-taller-adl/');
        cy.contains('Buenos Aires');
    });

})