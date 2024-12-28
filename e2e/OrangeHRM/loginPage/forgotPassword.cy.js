// <reference types="cypress"/>
import loginPage from "../../../POM/orangeHRM/loginPage/login";
import forgotPassword from "../../../POM/orangeHRM/loginPage/forgotPassword";


// forgot password di halaman login
describe('Forgot Password Feature', () => {
  it('Reset Password with credential user', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      loginPage.textLogin().should('have.text','Login');

      // klik tombol forgot password 
      forgotPassword.buttonForgotPassword().click();
      forgotPassword.textResetPassword().should('have.text', 'Reset Password');
      forgotPassword.inputUsername().type('Admin');
      cy.intercept("GET", "**/index.php/auth/sendPasswordReset").as("sendPasswordReset");
      forgotPassword.buttonResetPassword().click();
      cy.wait("@sendPasswordReset");
      forgotPassword.textResetPassword().should('have.text','Reset Password link sent successfully')
   })


// halaman reset password
   it('Reset Password then cancel', ()=> {
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       loginPage.textLogin().should('have.text','Login');
       cy.intercept("GET", "**/web/index.php/auth/requestPasswordResetCode").as("requestResetPassword");

       // klik tombol forgot password setelah mengisi username
       forgotPassword.buttonForgotPassword().click();
       forgotPassword.textResetPassword().should('have.text', 'Reset Password');
       cy.wait("@requestResetPassword");

       // klik tombol cancel
       forgotPassword.buttonCancel().click();
       loginPage.textLogin().should('have.text','Login');
   })

  // klik tombol forgot password tidak mengisi username 
   it('Click Reset Button without fill Username',()=>{
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       loginPage.textLogin().should('have.text','Login');
       forgotPassword.buttonForgotPassword().click();
       forgotPassword.inputUsername().should('have.value', '');
       forgotPassword.buttonResetPassword().click();
       forgotPassword.messageRequired().should('have.text','Required');
   })

})