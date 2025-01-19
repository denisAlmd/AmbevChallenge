import { PageElements } from '../../../support/variables.js';
import "../../../support/commands.js";


describe('Login test', () => {

  it('should login with a valid user', () => {
    cy.getUsers().then((users) => {
      const validUser = users.usuarios[0]; // Get the first user from the list

      // Log the user email and password
      cy.log('Email do usuário encontrado: ' + validUser.email);
      cy.log('Senha do usuário encontrado: ' + validUser.password);

      // Visit the login page and login with the valid user 
      cy.visit(PageElements.urls.frontUrl);
      cy.get(PageElements.selectors.loginPageSelectors.emailInput).type(validUser.email);
      cy.get(PageElements.selectors.loginPageSelectors.passwordInput).type(validUser.password);
      cy.get(PageElements.selectors.loginPageSelectors.submitButton).click();

      // Check if the user is logged in
      cy.get(PageElements.credencials.validCredentials.logOutButton).should('be.visible');
    });
  });
});