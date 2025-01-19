import { PageElements } from "../../../../support/variables.js";

describe('Get Users', () => {
  it('should fetch a list of users', () => {

    const baseUrlAPI = PageElements.urls.urlAPI;

    cy.request('GET', `${baseUrlAPI}/usuarios`).then((response) => {
      expect(response.status).to.eq(200); // Check if the status code is 200
      expect(response.body).to.not.be.null; // Check if the response body is not null
      expect(response.body.quantidade).to.not.be.null; // Check if the response body has the 'quantidade' key
      expect(response.body.quantidade).to.be.greaterThan(0); // Check if the 'quantidade' key has a value greater than 0
    });
  })
});