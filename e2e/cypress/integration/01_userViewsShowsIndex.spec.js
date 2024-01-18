/// <reference types="cypress" />

context("Shows Index Page", () => {
  beforeEach(() => {
    // clear the relevant table so that tests are deterministic
    // YOUR CODE HERE

    // add the record, designating model name then data
    // adding an array of object will add multiple
    // E.g.: cy.task("db:insert", { modelName: "model", json: "array of objects or object to seed"})
    // YOUR CODE HERE

    cy.visit(`/shows`)
  })

  context("when viewing the shows index page", () => {
    it("the user can see the first and second TV show", () => {
      // Written for you: a test that asserts that the first show in our list is present
      cy.get(".shows")
        .find("li")
        .first()
        .should("have.text", "The Last of Us")

      // write a test that asserts that the second show from our list is also present
      // note: you can't use a `second` method, but you can access elements in a list with `.eq(<element_number>)` 
    })

    it("has a link to the new animal form page", () => {

    })

    it("each element is a link to a show details page", () => {

    })
  })
})