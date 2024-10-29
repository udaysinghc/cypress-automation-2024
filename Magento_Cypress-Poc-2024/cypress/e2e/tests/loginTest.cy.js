/// <reference types="cypress"/>

import { LoginActionPage } from "../actions/loginActionPage";

describe('Login test suite', () => {

  before(() => {
    cy.fixture(`${Cypress.env('env')}/credentials.json`).then((credentials) => {
      cy.wrap(credentials).as('credentials');
      cy.log('Credentials loaded:', credentials); // Debug log
    });
  });

  it('User login test', () => {
    const loginActionPageLoc = new LoginActionPage();
    cy.visit('/');
    cy.title().should('include', 'Home Page');
    cy.get('@credentials').then((credentials) => {
      loginActionPageLoc.login(credentials.email, credentials.password);

    });
    loginActionPageLoc.verifyLogoutCTA();
  });
})
