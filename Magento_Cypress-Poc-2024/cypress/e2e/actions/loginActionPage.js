import LoginPage from "../pages/loginLocatorPage";

const loginPageLoc = new LoginPage();

export class LoginActionPage {

    login(username, password) {
        loginPageLoc.signInCTA().should('be.visible');
        loginPageLoc.signInCTA().click({ force: true });
        loginPageLoc.email().type(username);
        loginPageLoc.password().type(password);
        loginPageLoc.loginCTA().click();
    }

    verifyLogoutCTA() {
        cy.wait(10000);
        loginPageLoc.loggedUserName().should('have.text', 'Welcome, Test F Test L!');
        loginPageLoc.dropdownMenu().click();
        loginPageLoc.signOutCTA().should('be.visible');
    }


}