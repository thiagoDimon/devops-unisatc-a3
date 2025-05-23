describe('User CRUD', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1337/');
    cy.login('admin@satc.edu.br', 'welcomeToStrapi123');
  })
  it('Cadastrar User', () => {
    cy.get('[aria-label="Content Manager"]').click();
    cy.contains('span', 'User').click();
    cy.contains('span', 'Create new entry').click();
    cy.get('input[name="username"]').type('meuusuario');
    cy.get('input[name="email"]').type('meuusuario@example.com');
    cy.get('input[name="password"]').type('1234abc5678')
    cy.get('input[type="checkbox"][name="confirmed"]').click();
    cy.get('input[name="role"]').type('Authenticated{enter}');
    cy.contains('button', 'Save').should('not.be.disabled').click();
    cy.contains('p', 'Success:').should('be.visible')
    cy.contains('p', 'Saved document').should('be.visible')
  });
  it('Verificar User Cadastrado', () => {
    cy.get('[aria-label="Content Manager"]').click();
    cy.contains('span', 'User').click();
    cy.get('tbody tr td')
      .contains('meuusuario@example.com')
      .should('exist');
  });
  it.only('Editar User', () => {
    cy.get('[aria-label="Content Manager"]').click();
    cy.contains('span', 'User').click();
    cy.get('tbody tr').each(($row) => {
      const email = $row.find('td').eq(3).text().trim()
      if (email === 'meuusuario@example.com') {
        cy.wrap($row).find('button[aria-haspopup="menu"]').click()
      }
    })
  })
})