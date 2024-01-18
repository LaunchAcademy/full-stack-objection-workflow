// /// <reference types="cypress" />

context("New Show Form Page", () => {
    beforeEach(() => {

        // Make sure to truncate your shows table before running this test, or you will encounter uniqueness errors!

        cy.task("db:truncate", "Show")
        cy.visit("/shows/new")
    })

    context("on the new tv show form page", () => {
        context("when the user fills out the form correctly", () => {
            it("creates a new list item", () => {
                // get the first input field, type into the input field, and then assert that that field has the correct value

                // do this for each subsequent field
                // ....

                // submit the form (you can use the form element or target based on className)

                // assert that the pathname has changed to the shows index page OR that text that would only be found on the index page is displayed

                // assert that the list element in your list of lis contains your new show entry
            })
        })

        context("when the user fills out the form incorrectly", () => {
            it("remains on the new item form page if the form is submitted without a name and displays errors", () => {
                // get the form and submit it                 

                // assert that we are still on the form page

                // get the errors element (ideally by className), and ensure it has the text Name: is a required property
            })
        })
    }) 
}) 