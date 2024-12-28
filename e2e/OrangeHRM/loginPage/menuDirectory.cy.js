/// <reference types="cypress"/>
import loginPage from "../../../POM/OrangeHRM/loginPage/login";
import DashboardDirectory from "../../../POM/OrangeHRM/loginPage/menuDirectory";

describe('Dashboard : Directory', () => {
    
// Test case 1 : Search by Filter Location   
it('Search by Filter Location', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    loginPage.textLogin().should('have.text','Login');

    // input username
    loginPage.inputUsername().type('Admin');

    // input password
    loginPage.inputPassword().type('admin123');
    cy.intercept("GET","**/employees/action-summary").as("actionsummary");

    //klik button login
    loginPage.buttonLogin().click();
    cy.wait("@actionsummary");


    loginPage.menuDashboard().should('have.text','Dashboard');
    cy.intercept("GET","**/index.php/api/v2/directory/*").as("employ-limit");

    //klik menu directory
    DashboardDirectory.menuDirectory().click();
    cy.wait("@employ-limit");

    DashboardDirectory.dropdownLocation().click();
    DashboardDirectory.listBoxJobTitle_Location().should('be.visible');
    cy.contains('Texas').should('be.visible').click();
    DashboardDirectory.buttonSearch().click();
    DashboardDirectory.MessageRecord().should('contain.text',' (4) Records Found');     
 })       


    // Test case 2 : Search by Filter Location with condition no record
    it('Search by Filter Location with condition no record', () => {
           cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
           loginPage.textLogin().should('have.text','Login');

           // input username
           loginPage.inputUsername().type('Admin');

           // input password
           loginPage.inputPassword().type('admin123');
           cy.intercept("GET","**/employees/action-summary").as("actionsummary");

           //klik button login
           loginPage.buttonLogin().click();
           cy.wait("@actionsummary");

           
           loginPage.menuDashboard().should('have.text','Dashboard');
           cy.intercept("GET","**/index.php/api/v2/directory/*").as("employ-limit");

           // klik menu Directory
           DashboardDirectory.menuDirectory().click();
           cy.wait("@employ-limit");

           DashboardDirectory.dropdownLocation().click();
           DashboardDirectory.listBoxJobTitle_Location().should('be.visible').scrollIntoView();
           cy.contains('Canadian').should('be.visible').click();
           DashboardDirectory.buttonSearch().click();
           DashboardDirectory.MessageRecord().should('contain.text','No Records Found');
           DashboardDirectory.PopupNoRecordFound().should('be.visible');       
        })


    // Test case 3 : Search All Filter then Reset   
    it('Search All Filter then Reset', () => {
           cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
           loginPage.textLogin().should('have.text','Login');

           // input username
           loginPage.inputUsername().type('Admin');

           // input password
           loginPage.inputPassword().type('admin123');
           cy.intercept("GET","**/employees/action-summary").as("actionsummary");

           //klik button login
           loginPage.buttonLogin().click();
           cy.wait("@actionsummary");

           loginPage.menuDashboard().should('have.text','Dashboard');
           cy.intercept("GET","**/index.php/api/v2/directory/*").as("employ-limit");

           // klik menu Directory
           DashboardDirectory.menuDirectory().click();
           cy.wait("@employ-limit");

           DashboardDirectory.inputEmployeeName().type('Peter');
           DashboardDirectory.dropdownEmployee().should('contain.text', 'Peter').click();
           DashboardDirectory.dropdownJobTitle().click();
           DashboardDirectory.listBoxJobTitle_Location().should('be.visible');
           cy.contains('Chief Financial Officer').should('be.visible').click();    
           DashboardDirectory.dropdownLocation().click();
           DashboardDirectory.listBoxJobTitle_Location().should('be.visible');
           cy.contains('Texas').should('be.visible').click();
           DashboardDirectory.buttonReset().click();
        })
})