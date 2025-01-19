import { PageElements } from '../../../support/variables.js';

describe('Login Test', () => {
    it('should display an error message for invalid login credentials', () => {
        cy.visit(PageElements.urls.frontUrl);

        // Fill in the login form with invalid credentials
        cy.get(PageElements.selectors.loginPageSelectors.emailInput).type(PageElements.credencials.invalidCredentials.email);
        cy.get(PageElements.selectors.loginPageSelectors.passwordInput).type(PageElements.credencials.invalidCredentials.password);
        cy.get(PageElements.selectors.loginPageSelectors.submitButton).click();

        // Check if the error message is displayed
        cy.get(PageElements.selectors.loginPageSelectors.errorMessage) 
          .should('be.visible')
          .and('contain', PageElements.credencials.invalidCredentials.errorMessageText);
    });
});