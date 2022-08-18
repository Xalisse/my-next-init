import { Then } from "cypress-cucumber-preprocessor/steps";

Then("I see {string} in the title", (word: string) => {
  cy.get("[data-cy='title']").should("contain", word);
});
