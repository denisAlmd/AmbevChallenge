import { PageElements } from '../../../support/variables.js';

describe('Title Test', () => {
    it('should display the correct title', () => {
        cy.visit(PageElements.urls.frontUrl);
        cy.title().should('include', PageElements.title);
    });
});