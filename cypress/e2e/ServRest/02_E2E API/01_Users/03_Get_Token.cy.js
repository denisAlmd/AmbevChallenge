import { PageElements } from "../../../../support/variables.js";

describe('Get a token access', () => {
    it('should get a token access', () => {
        cy.getUsers().then((users) => {
            const validUser = users.usuarios[0]; // Get the first user from the list

            const baseUrlAPI = PageElements.urls.urlAPI; // Get the base URL from the variables.js file
            const email = validUser.email; // Get the email from the user
            const password = validUser.password; // Get the password from the user

            cy.log(`Email encontrado: ${email}`);
            cy.log(`Senha encontrada: ${password}`);

            cy.request({
                method: 'POST',
                url: `${baseUrlAPI}login`,
                body: {
                    email: email,
                    password: password
                },
                failOnStatusCode: false
            }).then((response) => {
                switch (response.status) { 
                    case 200:
                        expect(response.body).to.have.property('authorization', response.body.authorization); // Check if the response body has the token property
                        expect(response.body).to.have.property('message', 'Login realizado com sucesso'); // Check if the response body has the token property
                        cy.wrap(response.body.authorization).as('authToken'); // Save the token in the alias authToken
                        break;
                    case 401:
                        expect(response.body.message).to.eq('Email e/ou senha inválidos');
                }
            });
        });
    })
});