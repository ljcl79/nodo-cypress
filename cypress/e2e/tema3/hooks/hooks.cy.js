describe('Validación de mascotas', () => {
    before(() => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app/');
        cy.get('[data-cy="link_login"]').click();
        cy.get('#email').type('user1@example.com');
        cy.get('#password').type('password123');
        cy.get('[data-cy="login_btn"]').click();
    });

    beforeEach(() => {
        cy.visit('https://adopcion-react-typescript-ia-semana.vercel.app/');
    });

    it('Validar que este Buddy', () => {
        cy.get('#pet_1').click();
        cy.get('h1').should('have.text', 'Buddy');
    });

    it('Validar que este Max', () => {
        cy.get('#pet_3').click();
        cy.get('h1').should('have.text', 'Max');
    });

    it('Validar que este Luna', () => {
        cy.get('#pet_2').click();
        cy.get('h1').should('have.text', 'Luna');
    });

    after(() => {
        cy.screenshot();
        cy.clearLocalStorage();
    });
});
