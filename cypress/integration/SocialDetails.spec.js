/// <reference types="cypress" />

describe("SocialDetails", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("body").should("be.visible");
    });
  
    it("should have correct social links", () => {
      cy.get("[data-testid='github']").should(
        "have.attr",
        "href",
        "https://github.com/zzzNitro"
      );
      // cy.get("[data-testid='youtube']").should(
      //   "have.attr",
      //   "href",
      //   "https://www.youtube.com/"
      // );
      // cy.get("[data-testid='linkedin']").should(
      //   "have.attr",
      //   "href",
      //   "https://www.linkedin.com/in/pablo-benito-nunez/"
      // );
      // cy.get("[data-testid='twitter']").should(
      //   "have.attr",
      //   "href",
      //   "https://twitter.com/"
      // );
    });
  });

  // Write tests for other links in homepage here