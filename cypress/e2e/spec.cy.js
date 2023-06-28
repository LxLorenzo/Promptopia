describe('Cadastro conta', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it("Tela carregada com sucesso", () => {
    cy.get("body")
    cy.get("input[placeholder='Search for a tag or a username']")
    cy.get(".black_btn").eq(1).contains("Sign in")
  })
})