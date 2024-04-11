var count_characters = 0;
describe("Testes de api da disney", () => {
  it("validar a estrutura da requisicao de todos os personagens", () => {
    cy.request({
      method: "GET",
      url: "https://api.disneyapi.dev/character",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("info");
      expect(response.body.info).to.a("object");
      expect(response.body.info).to.have.property("count");
      expect(response.body.info.count).to.a("number");
      expect(response.body.info).to.have.property("nextPage");
      expect(response.body.info.nextPage).to.a("string");
      expect(response.body.info).to.have.property("previousPage");
      expect(response.body.info.previousPage).to.a("string");
      expect(response.body.info).to.have.property("totalPages");
      expect(response.body.info.totalPages).to.a("integer");
      expect(response.body).to.have.property("data");
      expect(response.body.data.data).to.a("array");
      expect(response.body.data[0]).to.have.property("allies");
      expect(response.body.data[0].allies).to.a("array");
      expect(response.body.data[0]).to.have.property("createdAt");
      expect(response.body.data[0].createdAt).to.a("string");
      expect(response.body.data[0]).to.have.property("enemies");
      expect(response.body.data[0].enemies).to.a("array");
      expect(response.body.data[0]).to.have.property("films");
      expect(response.body.data[0].films).to.a("array");
      expect(response.body.data[0]).to.have.property("imageUrl");
      expect(response.body.data[0].imageUrl).to.a("string");
      expect(response.body.data[0]).to.have.property("name");
      expect(response.body.data[0].name).to.a("string");
      expect(response.body.data[0]).to.have.property("parkAttractions");
      expect(response.body.data[0].parkAttractions).to.a("array");
      expect(response.body.data[0]).to.have.property("shortFilms");
      expect(response.body.data[0].shortFilms).to.a("array");
      expect(response.body.data[0]).to.have.property("sourceUrl");
      expect(response.body.data[0].sourceUrl).to.a("string");
      expect(response.body.data[0]).to.have.property("tvShows");
      expect(response.body.data[0].tvShows).to.a("array");
      expect(response.body.data[0]).to.have.property("updatedAt");
      expect(response.body.data[0].updatedAt).to.a("string");
      expect(response.body.data[0]).to.have.property("url");
      expect(response.body.data[0].url).to.a("string");
      expect(response.body.data[0]).to.have.property("videoGames");
      expect(response.body.data[0].videoGames).to.a("array");
      expect(response.body.data[0]).to.have.property("__v");
      expect(response.body.data[0].__v).to.a("integer");
      expect(response.body.data[0]).to.have.property("_id");
      expect(response.body.data[0]._id).to.a("integer");
    });
  });

  it("Validar a estrutura da requisicao de um personagem especifico", () => {
    cy.request({
      method: "GET",
      url: "https://api.disneyapi.dev/character/18",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("info");
      expect(response.body.info).to.a("object");
      expect(response.body.info).to.have.property("count");
      expect(response.body.info.count).to.a("number");
      expect(response.body).to.have.property("data");
      expect(response.body.data.data).to.a("array");
      expect(response.body.data).to.have.property("allies");
      expect(response.body.data.allies).to.a("array");
      expect(response.body.data).to.have.property("createdAt");
      expect(response.body.data.createdAt).to.a("string");
      expect(response.body.data).to.have.property("enemies");
      expect(response.body.data.enemies).to.a("array");
      expect(response.body.data).to.have.property("films");
      expect(response.body.data.films).to.a("array");
      expect(response.body.data).to.have.property("imageUrl");
      expect(response.body.data.imageUrl).to.a("string");
      expect(response.body.data).to.have.property("name");
      expect(response.body.data.name).to.a("string");
      expect(response.body.data).to.have.property("parkAttractions");
      expect(response.body.data.parkAttractions).to.a("array");
      expect(response.body.data).to.have.property("shortFilms");
      expect(response.body.data.shortFilms).to.a("array");
      expect(response.body.data).to.have.property("sourceUrl");
      expect(response.body.data.sourceUrl).to.a("string");
      expect(response.body.data).to.have.property("tvShows");
      expect(response.body.data.tvShows).to.a("array");
      expect(response.body.data).to.have.property("updatedAt");
      expect(response.body.data.updatedAt).to.a("string");
      expect(response.body.data).to.have.property("url");
      expect(response.body.data.url).to.a("string");
      expect(response.body.data).to.have.property("videoGames");
      expect(response.body.data.videoGames).to.a("array");
      expect(response.body.data).to.have.property("__v");
      expect(response.body.data.__v).to.a("integer");
      expect(response.body.data).to.have.property("_id");
      expect(response.body.data._id).to.a("integer");

    });
  });

  it("Validar requisição de um personagem que não existe", () => {
    cy.request({
      method: "GET",
      url: "https://api.disneyapi.dev/character/1",
    }).then((response) => { 
      expect(response.status).to.eq(404);
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.a("string");
      expect(response.body.message).to.eq("Character not found");
    });
    });

  it("Validar a requisição de um personagem especifico existente", () => {
    cy.request({
        method: "GET",
        url: "https://api.disneyapi.dev/character/18",
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("info");
        expect(response.body.info).to.a("object");
        expect(response.body.info).to.have.property("count");
        expect(response.body.info.count).to.a("number");
        expect(response.body).to.have.property("data");
        expect(response.body.data.data).to.a("array");
        expect(response.body.data).to.have.property("allies");
        expect(response.body.data.allies).to.a("array");
        expect(response.body.data).to.have.property("createdAt");
        expect(response.body.data.createdAt).to.a("string");
        expect(response.body.data).to.have.property("enemies");
        expect(response.body.data.enemies).to.a("array");
        expect(response.body.data).to.have.property("films");
        expect(response.body.data.films).to.a("array");
        expect(response.body.data).to.have.property("imageUrl");
        expect(response.body.data.imageUrl).to.a("string");
        expect(response.body.data).to.have.property("name");
        expect(response.body.data.name).to.a("string");
        expect(response.body.data).to.have.property("parkAttractions");
        expect(response.body.data.parkAttractions).to.a("array");
        expect(response.body.data).to.have.property("shortFilms");
        expect(response.body.data.shortFilms).to.a("array");
        expect(response.body.data).to.have.property("sourceUrl");
        expect(response.body.data.sourceUrl).to.a("string");
        expect(response.body.data).to.have.property("tvShows");
        expect(response.body.data.tvShows).to.a("array");
        expect(response.body.data).to.have.property("updatedAt");
        expect(response.body.data.updatedAt).to.a("string");
        expect(response.body.data).to.have.property("url");
        expect(response.body.data.url).to.a("string");
        expect(response.body.data).to.have.property("videoGames");
        expect(response.body.data.videoGames).to.a("array");
        expect(response.body.data).to.have.property

    })
  });

  it("Verificar se todos os 7438 personagens podem ser listados", () => {
    fetchPage(1);
  });


})



function fetchPage(pageNumber, count_characters = 0) {
    cy.request({
      method: "GET",
      url: `https://api.disneyapi.dev/character?page=${pageNumber}`,
    }).then((response) => {
      count_characters += parseInt(response.body.info.count);
      if (pageNumber < response.body.info.totalPages) {
        fetchPage(pageNumber + 1, count_characters);
      } else {
        expect(count_characters).to.eq(7438);
      }
    });
  }