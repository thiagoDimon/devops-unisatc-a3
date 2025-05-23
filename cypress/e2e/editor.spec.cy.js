describe('Testes do Usuário Editor', () => {
  before(() => {
    cy.visit('http://localhost:1337/');
    cy.login('editor@satc.edu.br', 'welcomeToStrapi123');
  });

  it('Cadastrando um autor', () => {
    cy.get('[input]');
  });
});
