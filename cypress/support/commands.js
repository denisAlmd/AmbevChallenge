import { PageElements } from "../support/variables.js";

Cypress.Commands.add('getUsers', () => {
  const baseUrlAPI = PageElements.urls.urlAPI;
  return cy.request('GET', `${baseUrlAPI}usuarios`).then((response) => {
    expect(response.status).to.eq(200); // Check if the status code is 200
    return response.body; // Return the response body
  });
});

Cypress.Commands.add('getProducts', () => {
  const baseUrlAPI = PageElements.urls.urlAPI;
  return cy.request('GET', `${baseUrlAPI}/produtos`).then((response) => {
    return response.body; // Return the response body
  });
});


Cypress.Commands.add('getToken', (user) => {
  const baseUrlAPI = PageElements.urls.urlAPI;
  return cy.request('POST', `${baseUrlAPI}/login`, user).then((response) => {
    return response.body.token; // Return the response body
  });
});