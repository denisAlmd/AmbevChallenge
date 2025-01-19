import { PageElements } from "../../../../support/variables.js";
import "../../../../support/commands.js";
import { fa } from "@faker-js/faker";

describe('Get User By ID', () => {

    it('should find a user using a found user id', () => {
        cy.getUsers().then((users) => {
            const validUser = users.usuarios[0]; // Get the first user from the list

            const baseUrlAPI = PageElements.urls.urlAPI;
            const userId = validUser._id;

            cy.request(
                {
                    method: 'GET',
                    url: `${baseUrlAPI}usuarios/${userId}`,
                    failOnStatusCode: false                }
            ).then((response) => {
                cy.log(JSON.stringify(response.body));
                switch (response.status) {
                    case 200:
                        expect(response.body).to.have.property('nome');
                        expect(response.body).to.have.property('email');
                        expect(response.body).to.have.property('password');
                        expect(response.body).to.have.property('administrador');
                        expect(response.body).to.have.property('_id');
                        break;
                    case 400:
                        expect(response.body.message).to.eq('Usuário não encontrado');
                        break;
                }
            });
        });
    });
});







