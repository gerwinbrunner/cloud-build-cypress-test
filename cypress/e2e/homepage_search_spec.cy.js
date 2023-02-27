describe('Testing Wikipedia', () => {
    it('I can search for content', () => {
      cy.visit('https://www.wikipedia.org');
      cy.get("input[type='search']").type('Erste Group');
      cy.get("button[type='submit']").click();
      cy.contains('Erste Group Bank AG');
    });
  });