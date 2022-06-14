/// <reference types="cypress" />

describe("visual tests", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.get("body").should("be.visible")
        cy.get("body").should("not.have.css", "display", "none")
    })

    it("displays the home page correctly", () => {
        cy.get('body').happoScreenshot()
    })
})