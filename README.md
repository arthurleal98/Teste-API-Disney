## Teste-API-Disney

### Realizando testes automatizados com Cypress na API Disney+ ([https://disneyapi.dev/docs/](https://disneyapi.dev/docs/))



Este repositório te ajudará a explorar a API Disney com testes automatizados usando Cypress.

**Pré-requisitos:**

* **Node.js:** [https://nodejs.org/en/](https://nodejs.org/en/)
* **Cypress:** [https://www.cypress.io/](https://www.cypress.io/)

**Instalando o Cypress:**

```shell
npm install cypress
```

**Executando os testes:**

1. Abra o terminal no diretório do projeto.
2. Inicie o Cypress com o comando:

```shell
npx cypress run
```

3. O Cypress executará todos os testes e exibir os dados da execução

**Estrutura do projeto:**

* `cypress/integration`: Contém os arquivos de teste (.cy.js)
* `package.json`: Gerencia as dependências do projeto

**Exemplo de teste:**

```javascript
describe('API Disney+', () => {
  it('deve buscar personagens por nome', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.disneyapi.dev/characters?name=Mickey'
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data[0].name).to.eq('Mickey Mouse');
    });
  });
});
```

**Recursos adicionais:**

* **Documentação do Cypress:** [https://docs.cypress.io/](https://docs.cypress.io/)
* **Documentação da API Disney:** [https://disneyapi.dev/docs/](https://disneyapi.dev/docs/)
* **Tutoriais do Cypress:** [https://www.cypress.io/blog/](https://www.cypress.io/blog/)


