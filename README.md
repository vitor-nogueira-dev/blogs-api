
# Projeto Blogs API

###  Proposta: 


<details>
<summary>📝 Proposta</summary>
Neste projeto, desenvolvi uma API e um banco de dados para a produção de conteúdo em um blog. Utilizei Node.js e o ORM Sequelize para realizar operações de CRUD nos posts. </br> 

Os endpoints foram conectados ao banco de dados, seguindo os princípios do REST. Para criar um post, é necessário ter um usuário autenticado com JWT. A autenticação é feita por meio de tokens, que são validados nas requisições que exigem autenticação. </br>

Além disso, utilizei categorias para classificar os posts, estabelecendo assim uma relação entre posts e categorias, e vice-versa.
</details>

## Instalação:

<details>
  <summary>🐳 Com Docker</summary>

Clone este repositório:
```bash
git clone git@github.com:vitor-nogueira-dev/blogs-api.git
```

Entre no diretório e instale as dependências:

```bash
cd blogs-api
npm install
```

Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`

* Lembre-se de parar o mysql se estiver usando localmente na porta padrão (3306), ou adapte, caso queria fazer uso da aplicação em containers;

* Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;
  
* A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code.

* Use o comando `docker exec -it blogs_api bash`, ou para acessar o container e executar lá:

* Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

* Instale as dependências [Caso existam] com `npm install` dentro do container `blogs_api`

⚠️ Atenção: Caso opte por utilizar o Docker, TODOS os comandos disponíveis no `package.json` (`npm start, npm test, npm run dev`, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.

⚠️ Atenção: Não rode o comando `npm audit fix`! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

⚠️ Atenção: Se você se deparar com o erro `EADDRINUSE`, quer dizer que sua aplicação já esta utilizando a `porta 3001`, seja com outro processo do Node.js (que você pode parar com o comando `killall node`) ou algum container! Neste caso você pode parar o container com o comando `docker stop <nome-do-container>`.

✨ Dica: Antes de iniciar qualquer coisa, observe os containers que estão em execução em sua máquina. Para ver os containers em execução basta usar o comando `docker container ls`, caso queira parar o container basta usar o comando `docker stop <nome-do-container>` e se quiser parar e excluir os containers, basta executar o comando `docker-compose down`
</details>

<details>
<summary>🐳 Sem Docker</summary>

Instale as dependências [Caso existam] com `npm install`

⚠️ Atenção Não rode o comando `npm audit fix`! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

⚠️ Atenção A versão do `Node.js` e `NPM` a ser utilizada é `"node": ">=16.0.0"` e `"npm": ">=7.0.0"`, como descrito na chave `engines` no arquivo `package.json`. Idealmente deve-se utilizar o Node.js na versão `16.14`, a versão na qual este projeto foi testado.

Crie um arquivo `.env` na raiz do projeto seguindo o padrão do arquivo `env.example` e o modifique de acordo com a necessidade.

Coloque `env $(cat .env)` antes de qualquer comando que for executar, por exemplo:

```bash
env $(cat .env) npm run dev
```
</details>

<details>
<summary>📄 Documentação API</summary>

| Método | Endpoint            | Descrição                                           | Requisitos de Autenticação |
|--------|---------------------|-----------------------------------------------------|----------------------------|
| POST   | /login              | Realiza o login do usuário                          | N/A                        |
| POST   | /user               | Adiciona um novo usuário                            | N/A                        |
| GET    | /user               | Retorna todos os usuários                           | Token de autenticação      |
| GET    | /user/:id           | Retorna um usuário específico                       | Token de autenticação      |
| POST   | /categories         | Adiciona uma nova categoria                         | Token de autenticação      |
| GET    | /categories         | Retorna todas as categorias                          | Token de autenticação      |
| POST   | /post               | Adiciona um novo post e vincula às categorias        | Token de autenticação      |
| GET    | /post               | Retorna todos os posts                               | Token de autenticação      |
| GET    | /post/:id           | Retorna um post específico                          | Token de autenticação      |
| PUT    | /post/:id           | Atualiza um post existente                           | Token de autenticação      |
| DELETE | /post/:id           | Deleta um post existente                             | Token de autenticação      |
| DELETE | /user/me            | Deleta o usuário logado                              | Token de autenticação      |
| GET    | /post/search?q=term| Retorna os posts que correspondem ao termo de busca  | Token de autenticação      |



</details>


<details>
  <summary>💡 Stacks utilizadas</summary>

  Linguagem de programação: ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)&nbsp; </br>
  Framework de desenvolvimento: ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)&nbsp; </br>
  Banco de dados: ![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)&nbsp; </br>
  ORM (Object-Relational Mapping): ![Sequelize](https://img.shields.io/badge/Sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=white)&nbsp; </br>
  Ferramenta de análise de código estática: ![ESLint](https://img.shields.io/badge/ESLint-00000F?style=for-the-badge&logo=eslint&logoColor=white)&nbsp; </br>
  Ferramenta de formatação de código: ![Prettier](https://img.shields.io/badge/Prettier-00000F?style=for-the-badge&logo=prettier&logoColor=white)&nbsp; </br>
</details>


