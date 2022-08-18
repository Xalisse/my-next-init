import { Given } from "cypress-cucumber-preprocessor/steps";

enum PAGES {
  home = "/",
}

Given("I am on the {string} page", (page: string) => {
  cy.visit(PAGES[page as keyof typeof PAGES]);
});
