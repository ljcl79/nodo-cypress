describe('Validando los datos de mascotas', () => {

    beforeEach(() => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app');
    });

    it('Validando cada mascota', () => {
        cy.fixture('mascotas.json').then((data) => {
            data.forEach((elemento) => {
                cy.get('#pet_' + elemento.id).click();
                cy.get('h1').should('have.text', elemento.name);
                cy.go('back');
            });
        })
    });
});