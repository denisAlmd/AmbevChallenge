import { PageElements } from "../../../../support/variables.js";
import "../../../../support/commands.js";

describe('delete a product using an id found by request', () => {

    let authToken;
    let productId;

    // Gancho para obter o usuário e o token antes de executar os testes
    before(() => {
        cy.getUsers().then((users) => {
            const validUser = users.usuarios[0]; // Get the first user from the list

            const baseUrlAPI = PageElements.urls.urlAPI; // Get the base URL from the variables.js file
            const email = validUser.email; // Get the email from the user
            const password = validUser.password; // Get the password from the user

            cy.request({
                method: 'POST',
                url: `${baseUrlAPI}login`,
                body: {
                    email: email,
                    password: password
                },
                failOnStatusCode: false
            }).then((response) => {
                if (response.status === 200) {
                    authToken = response.body.authorization; // Armazenar o token
                }
            });
        });
    });

    beforeEach(() => {
        cy.getProducts().then((product) => {
            const validProduct = product.produtos[0]; // Get the first product from the list
            productId = validProduct._id; // Get the product id
        });
    });

    it('should delete a product using a found product id', () => {
        const baseUrlAPI = PageElements.urls.urlAPI;

        cy.log(`token: ${authToken}`);
        cy.request({
            method: 'DELETE',
            url: `${baseUrlAPI}produtos/${productId}`,
            headers: {
                'Authorization': authToken
            },
            failOnStatusCode: false
        }).then((response) => {
            cy.log('O código  de status foi: ', response.status);
            switch (response.status) {
                case 200:
                    expect(response.body.message).to.eq('Registro excluído com sucesso' | 'Nenhum registro excluído');
                    break;
                case 400:
                    expect(response.body.message).to.eq('Produto faz parte de carrinho');
                    break;
                case 401:
                    expect(response.body.message).to.eq('Token ausente, inválido ou expirado');
                    break;
                case 403:
                    expect(response.body.message).to.eq('Rota exclusiva para administradores');
                    break;
                default:
                    throw new Error(`Status de resposta inesperado: ${response.status}`);
            }
        });
    });
});
