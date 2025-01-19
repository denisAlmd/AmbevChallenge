# ServeRest Tests
Essa API possui dados dinamicos no servidor. Um exemplo, é o caso dos usuários: Inicilamente ele é criado e depois de um tempo, ele já não existe mais no servidor.
Por isso, no momento de testar o login, por exemplo, foi necessário fazer uma requisição para pegar o primeiro usuário disponível e enviar as credenciais.
Isso ocorreu com os produtos e demais endpoints. Fazendo as requisições primeiro, garantimos que vai existir sempre algum usuário. Um dos testes é o processo de criação de usuários pelo frontend.

# Clone o repositório
git clone git@github.com:denisAlmd/AmbevChallenge.git

# Instale as dependências
npm install

# Comando para iniciar o projeto
npx cypress open npx cypress run
Com o comando open, um browser vai ser aberto. Escilha primeiro a opção E2E testing, então escolha o navegador Chrome e por último, 
clique no botão Start E2E testing no Chrome. Uma outra tela vai abrir e é só escolher o testes a ser realizado.

