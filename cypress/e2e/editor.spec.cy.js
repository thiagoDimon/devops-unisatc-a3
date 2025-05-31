describe('Testes do Usuário Editor', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1337/');
    cy.login('editor@satc.edu.br', 'welcomeToStrapi123');
  });

  it('Cadastrando autor', () => {
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
  });

  it('Editando autor cadastrado', () => {
    cy.get('a[aria-label="Content Manager"]').click();
    cy.get('a > div > span').contains('Autor').click();
    cy.get('[aria-rowindex="3"]').click()
    cy.get('input[name="name"]').clear().type('Usuário Autor Alterado');
    cy.get('input[name="email"]').clear().type('autor.alterado@autor.com.br')
    cy.get('button > span').contains('Save').click();
  })

  it('Deletando autor cadastrado', () => {
    cy.get('a[aria-label="Content Manager"]').click();
    cy.get('a > div > span').contains('Autor').click();
    cy.get('td[role="gridcell"]:last > button').click();
    cy.get('.rROPR').click();
    cy.get('footer > button > span').contains('Confirm').click();
  })
});
