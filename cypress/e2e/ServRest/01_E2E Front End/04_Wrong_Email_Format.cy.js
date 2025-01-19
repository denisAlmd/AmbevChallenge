import { PageElements } from '../../../support/variables.js';

describe('Login Test', () => {
    it('should display an error message for invalid login credentials', () => {
        cy.visit(PageElements.urls.frontUrl);

        // Preenche o formulário de login com o email em branco e a senha
        cy.get(PageElements.selectors.loginPageSelectors.passwordInput).type(PageElements.credencials.invalidCredentials.password);
        cy.get(PageElements.selectors.loginPageSelectors.submitButton).click();

        // Verifica se a mensagem de erro é exibida
        cy.get(PageElements.selectors.loginPageSelectors.errorMessage) 
            .should('be.visible')
            .and('contain', PageElements.credencials.invalidCredentials.errorEmailBlank);
    });
});