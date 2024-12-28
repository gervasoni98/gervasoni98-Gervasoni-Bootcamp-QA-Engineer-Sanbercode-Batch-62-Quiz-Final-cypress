// <reference types="cypress"/>
 
// Test Case 1: valid username & password
describe('Login Feature',() => {
    it('User Login with Valid credentials',() => {

        // link login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');

        // Masukkan Username & Password
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.intercept("GET", "**/employees/action-summary").as("actionSummary");

        // Klik tombol Login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.wait("@actionSummary");

    })


 // Test Case 2 : valid directory
 it('User Valid Directory',() => {

    // link login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');

    // Masukkan Username & Password
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');
    cy.intercept("GET", "**/employees/action-summary").as("actionSummary");

    // Klik tombol Login
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    cy.wait("@actionSummary");

     // link directory page
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
     cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard');
     cy.intercept("GET", "**/employees?limit=14&offset=0").as("actionEmployees");

     // Klik menu Directory
     cy.contains('Directory').click();
     cy.wait("@actionEmployees");

    })

})   