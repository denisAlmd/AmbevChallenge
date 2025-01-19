import { fr } from "@faker-js/faker";

export const PageElements = {
    urls: {
        frontUrl: 'https://front.serverest.dev/login',
        urlAPI: 'https://serverest.dev/',
    },
    title: 'Front - ServeRest',
    images: {
        logoLoginPage: 'img[src="/static/media/serverestlogo1.532833ba.png"]'
    },
    selectors: {
        loginPageSelectors: { 
            emailInput: 'input[id=email]',
            passwordInput: 'input[id=password]',
            submitButton: 'button[type=submit]',
            errorMessage: 'span',
            signUpButton: 'a[data-testid="cadastrar"]',
            nomeInput: 'input[id=nome]',
            successMessageNewUserElement: 'a[href="/#"]',
        },        
        homePageSelectors: {
            searchInput: 'input[data-testid="pesquisar"]',
            searchButton: 'button[data-testid="botaoPesquisar"]',
            notFoundMessage: 'Nenhum produto foi encontrado',
        }
    },
    credencials: { 
        invalidCredentials: {
            email: 'mail@mail.com',
            password: 'password',
            errorMessageText: 'Email e/ou senha inválidos',
            errorEmailBlank: 'Email é obrigatório'
        },
        validCredentials: {
            email: 'Sage.Braun42@gmail.com',
            password: '123456',
            logOutButton: 'button[data-testid="logout"]',
        },
        invalidFormats: { 
            email: 'mailmail.com',
        }
    },
    newUser: {
        successMessage: 'Cadastro realizado com sucesso',
     },
     homePageElements: {
        products: {
            name: 'Sleek Plastic Computer',
            fakeName: 'lkijhgujfhkjgfckugcfkhgckg'
        },
        
     }
};