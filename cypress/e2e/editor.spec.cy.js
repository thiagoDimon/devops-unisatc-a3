describe('Testes do Usuário Editor', () => {
  before(() => {
    cy.visit('http://localhost:1337/');
    cy.login('editor@satc.edu.br', 'welcomeToStrapi123');
  });

  it('Cadastrando um autor', () => {
    cy.get('a[aria-label="Content Manager"]').click();
    cy.get('span').contains('Autor').click();
    cy.get('span').contains('Create new entry').click();
    cy.get('#:r1c:').type('Usuário Autor 1');
    cy.get('#:r1d:').type('autor1@autor.com.br')
    cy.get('section[aria-label="Avatar"]').click();
    // cy.get('input[type=file]').selectFile('file.json')
  });
});
