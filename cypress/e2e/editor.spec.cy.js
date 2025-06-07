describe('Testes do Usuário Editor', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1337/');
    cy.login('editor@satc.edu.br', 'welcomeToStrapi123');
  });

  it('Cadastrando e deletando autor', () => {
    cy.get('a[aria-label="Content Manager"]').click();
    cy.get('a > div > span').contains('Autor').click();
    cy.get('span').contains('Create new entry').click();
    cy.get('input[name="name"]').type('Usuário Autor 1');
    cy.get('input[name="email"]').type('autor1@autor.com.br')
    cy.get('section[aria-label="Avatar"]').click();
    cy.get('button[role="checkbox"]').click()
    cy.get('button > span').contains('Finish').click();
    cy.get('button > span').contains('Save').click();
    cy.get('h1').contains('Usuário Autor 1');
    cy.get('a[aria-label="Content Manager"]').click();
    cy.get('a > div > span').contains('Autor').click();
    cy.get('td[role="gridcell"]:last > button').click();
    cy.get('.rROPR').click();
    cy.get('footer > button > span').contains('Confirm').click();
  })

  it('Cadastrando e deletando categoria', () => {
    cy.get('a[aria-label="Content Manager"]').click();
    cy.get('a > div > span').contains('Categoria').click();
    cy.get('span').contains('Create new entry').click();
    cy.get('input[name="name"]').type('Ficção Científica');
    cy.get('input[name="slug"]').type('ficcao-cientifica');
    cy.get('textarea[name="description"]').type('Livros que exploram narrativas baseadas em avanços científicos e tecnológicos, geralmente ambientados em cenários futuristas ou alternativos.');
    cy.get('button > span').contains('Save').click();
    cy.get('a[aria-label="Content Manager"]').click();
    cy.get('a > div > span').contains('Categoria').click();
    cy.get('td[role="gridcell"]:first > button').click();
    cy.get('button > span').contains('Delete').click();
    cy.get('footer > button > span').contains('Confirm').click({ force: true });
  })
});
