export default class DashboardDirectory {
    static textLogin(){
        return cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
    }
    static inputUsername(){
        return cy.get('[name="username"]');
    }

    static inputPassword(){
        return cy.get('[name="password"]');
    }

    static buttonLogin(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]');
    }

    static menuDashboard(){
        return cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]');
    }

    static buttonOpenMenu(){
        return cy.get('[class="oxd-icon-button oxd-main-menu-button"]');
    }

    static menuDirectory(){
        return cy.get('[href="/web/index.php/directory/viewDirectory"]');
    }

    static inputEmployeeName(){
        return cy.get('[class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]');
    }

    static buttonReset(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--ghost"]');
    }

    static buttonSearch(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]')
    }

    static buttonDropdownFilterDirectory(){
        return cy.get('[class="oxd-icon bi-caret-up-fill"]');
    }

    static dropdownEmployee(){
        return cy.get('[class="oxd-autocomplete-dropdown --positon-bottom"]');
    }

    static MessageInvalid(){
        return cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')
    }

    static dropdownJobTitle(){
        return cy.get('[class="oxd-select-wrapper"]').get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').eq(0);
    }

    static dropdownLocation(){
        return cy.get('[class="oxd-select-wrapper"]').get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').eq(1);
    }

    static listBoxJobTitle_Location(){
        return cy.get('[class="oxd-select-dropdown --positon-bottom"]').should('be.visible');
    }

    static MessageRecord(){
        return cy.get('[class="oxd-text oxd-text--span"]'); 
    }

    static PopupNoRecordFound(){
        return cy.get('[class="oxd-toast oxd-toast--info oxd-toast-container--toast"]');
    }
}