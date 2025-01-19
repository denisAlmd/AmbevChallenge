import { PageElements } from '../../../support/variables.js';
import { faker } from '@faker-js/faker';

describe('Login Test', () => {
    it('New user create process, confirm message and logout', () => {
        cy.visit(PageElements.urls.frontUrl);

        // Click on the "Cadastrar" button
        cy.get(PageElements.selectors.loginPageSelectors.signUpButton).click();

        // Generate a random credentials
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();
        const randomPassword = faker.internet.password();

        // Fill in the registration form
        cy.get(PageElements.selectors.loginPageSelectors.nomeInput).type(randomName);
        cy.get(PageElements.selectors.loginPageSelectors.emailInput).type(randomEmail);
        cy.get(PageElements.selectors.loginPageSelectors.passwordInput).type(randomPassword);
        cy.get(PageElements.selectors.loginPageSelectors.submitButton).click();

        // Check if the success message is displayed
        cy.get(PageElements.selectors.loginPageSelectors.successMessageNewUserElement)
        .should('be.visible')
        .and('contain', PageElements.newUser.successMessage);

        // Logout
        cy.get(PageElements.credencials.validCredentials.logOutButton).click();
        // Check if the login page is displayed
        cy.get(PageElements.images.logoLoginPage).should('be.visible');

    });
});

