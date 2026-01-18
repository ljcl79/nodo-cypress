class Login {

    elements = {
        //El input del login
        inputUsuario: () => cy.get('#user-name'),
        //El input del password
        inputPassword: () => cy.get('#password'),
        //El boton
        botonSubmit: () => cy.get('[data-test="login-button"]'),
        //El mensaje de error
        mensajeError: () => cy.get('[data-test="error"]'),
    }

    tipearUsuario(nombreUsuario) {
        this.elements.inputUsuario().type(nombreUsuario)
    }

    tipearPassword(passwordUsuario) {
        this.elements.inputPassword().type(passwordUsuario)
    }

    clickLogin() {
        this.elements.botonSubmit().click();
    }

    hacerLogin(nombreUsuario, passwordUsuario) {
        this.tipearUsuario(nombreUsuario);
        this.tipearPassword(passwordUsuario);
        this.clickLogin();
    }
}

export const loginPage = new Login();