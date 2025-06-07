describe('Testes do Usuário Author', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1337/');
    cy.login('author@satc.edu.br', 'welcomeToStrapi123');
  });

  it('Cadastrando e deletando artigo', () => {
    cy.get('a[aria-label="Content Manager"]').click();
    cy.get('a > div > span').contains('Artigo').click();
    cy.get('span').contains('Create new entry').click();
    cy.get('input[name="title"]').type('A Hora da Estrela');
    cy.get('input[name="slug"]').type('a-hora-da-estrela');
    cy.get('textarea[name="description"]').type('Narra a história de Macabéa, uma jovem nordestina vivendo no Rio de Janeiro.');
    cy.get('input[role="combobox"]:first').type('Clarice Linspector{enter}');;
    cy.get('input[role="combobox"]:last').type('Literatura Brasileira{enter}');;
    cy.get('button > span').contains('Save').click();
    cy.get('a[aria-label="Content Manager"]').click();
    cy.get('a > div > span').contains('Artigo').click();
    cy.get('td[role="gridcell"]:last > button').click();
    cy.get('.rROPR').click();
    cy.get('footer > button > span').contains('Confirm').click();
  })
});
