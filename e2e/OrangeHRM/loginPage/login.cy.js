// <reference types="cypress"/>
 import loginPage from "../../../POM/orangeHRM/loginPage/login";

// Test Case 1: valid username & password
describe('Login Feature',() => {
    it('User Login with Valid credentials',() => {

        // link login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text','Login');

        // masukkan username & password
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');
        cy.intercept("GET","**/employees/action-summary").as("actionSummary");

        // klik button login
        loginPage.buttonLogin().click();
        cy.wait("@actionSummary");
        loginPage.menuDashboard().should('have.text','Dashboard')
    
    })


// Test Case 2: invalid username  
it('User Login with invalid username',() => {

     // link login page
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     loginPage.textLogin().should('have.text','Login');

     // masukkan username invalid & password benar
     loginPage.inputUsername().type('InvalidUser');
     loginPage.inputPassword().type('admin123');
     cy.intercept("GET","**/index.php/core/i18n/messages").as("messages");

      // klik button login
      loginPage.buttonLogin().click();
      cy.wait("@messages");
      loginPage.messageInvalid().should('have.text','Invalid credentials')

     })


// Test Case 3: invalid password  
it('User Login with invalid password',() => {

     // link login page
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     loginPage.textLogin().should('have.text','Login');

     // masukkan username invalid & password benar
     loginPage.inputUsername().type('Admin');
     loginPage.inputPassword().type('invalid123');
     cy.intercept("GET","**/index.php/core/i18n/messages").as("messages");

      // klik button login
      loginPage.buttonLogin().click();
      cy.wait("@messages");
      loginPage.messageInvalid().should('have.text','Invalid credentials')
      
     })


// Test Case 4: invalid username & password  
it('User Login with invalid username & password',() => {

     // link login page
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     loginPage.textLogin().should('have.text','Login');

     // masukkan username invalid & password benar
     loginPage.inputUsername().type('InvalidUser');
     loginPage.inputPassword().type('invalid123');
     cy.intercept("GET","**/index.php/core/i18n/messages").as("messages");

      // klik button login
      loginPage.buttonLogin().click();
      cy.wait("@messages");
      loginPage.messageInvalid().should('have.text','Invalid credentials')
      
     })


// Test Case 5: valid username & password blank  
it('User Login with valid username & password blank',() => {

     // link login page
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     loginPage.textLogin().should('have.text','Login');

     // masukan username valid dan tidak mengisi password
     loginPage.inputUsername().type('Admin');
     loginPage.inputPassword().should('have.value', '');

     // klik button login
     loginPage.buttonLogin().click();
     loginPage.messageRequired().should('have.text','Required')

     })
     

// Test Case 6: username blank & valid password  
it('User Login with username blank & valid password',() => {

     // link login page
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     loginPage.textLogin().should('have.text','Login');

     // masukan username valid dan tidak mengisi password
     loginPage.inputUsername().type('Admin');
     loginPage.inputPassword().should('have.value', '');

     // klik button login
     loginPage.buttonLogin().click();
     loginPage.messageRequired().should('have.text','Required')

     })

 
// Test Case 7: blank username & blank password   
it('User Login with username blank & password blank',() => {

     // link login page
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     loginPage.textLogin().should('have.text','Login');

     // masukan username valid dan tidak mengisi password
     loginPage.inputUsername().should('have.value', '');
     loginPage.inputPassword().should('have.value', '');

     // klik button login
     loginPage.buttonLogin().click();
     loginPage.messageRequired().should('have.text','RequiredRequired')

     })    

})



    











